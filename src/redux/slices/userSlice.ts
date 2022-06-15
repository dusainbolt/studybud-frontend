/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import {
  GetListUserSuccessAction,
  LoginAction,
  LoginActionSuccess,
  RegisterAction,
  RegisterActionSuccess,
  UpdateProfileAction,
  UpdateProfileSuccessAction,
  VerifyOAuth2Action,
  VerifyOAuthSuccess2Action,
  VerifyTokenAction,
} from '@redux/actions/userAction';
import { getPersistConfig } from '@redux/storage';
import { createAction, createSlice } from '@reduxjs/toolkit';
import { UserSlice } from '@type/user';
import { HYDRATE } from 'next-redux-wrapper';
import { persistReducer } from 'redux-persist';
import { RootState } from '../reducer';
import { AppState } from '../store';

const initialState: UserSlice = {
  loadingLogin: false,
};

const hydrate = createAction<AppState>(HYDRATE);

const sliceName = 'userSlice';

const userSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    // verifyOAuth2Start
    verifyOAuth2Start: (state: UserSlice, { payload }: VerifyOAuth2Action) => {
      state.loadingLogin = !!payload.access_token;
    },
    verifyOAuth2Success: (state: UserSlice, { payload }: VerifyOAuthSuccess2Action) => {
      state.loadingLogin = false;
      state.token = payload.token;
      state.user = { ...payload.user };
    },
    verifyOAuth2Error: (state: UserSlice) => {
      state.loadingLogin = false;
    },
    verifyTokenStart: (state: UserSlice, { payload }: VerifyTokenAction) => {
      state.loadingLogin = !!payload;
    },
    verifyTokenSuccess: (state: UserSlice, { payload }: VerifyOAuthSuccess2Action) => {
      state.loadingLogin = false;
      state.token = payload.token;
      state.user = { ...payload.user };
    },
    verifyTokenError: (state: UserSlice) => {
      state.loadingLogin = false;
    },
    registerStart: (state: UserSlice, { payload }: RegisterAction) => {
      state.loadingLogin = !!payload.name;
    },
    registerSuccess: (state: UserSlice, { payload }: RegisterActionSuccess) => {
      state.loadingLogin = false;
      state.registerEmail = payload;
    },
    registerError: (state: UserSlice) => {
      state.loadingLogin = false;
    },
    loginStart: (state: UserSlice, { payload }: LoginAction) => {
      state.loadingLogin = !!payload.credential;
    },
    loginSuccess: (state: UserSlice, { payload }: LoginActionSuccess) => {
      state.loadingLogin = false;
      state.token = payload.token;
      state.user = payload.user;
    },
    loginError: (state: UserSlice) => {
      state.loadingLogin = false;
    },
    updateProfileStart: (state: UserSlice, { payload }: UpdateProfileAction) => {
      state.loadingUpdateProfile = !!payload.userId;
    },
    updateProfileSuccess: (state: UserSlice, { payload }: UpdateProfileSuccessAction) => {
      state.loadingUpdateProfile = false;
      state.user = payload;
    },
    updateProfileError: (state: UserSlice) => {
      state.loadingUpdateProfile = false;
    },
    // getListUserStart
    getListUserStart: (state: UserSlice) => {
      state.loadingGetList = true;
    },
    getListUserSuccess: (state: UserSlice, { payload }: GetListUserSuccessAction) => {
      state.loadingGetList = false;
      state.list = payload;
    },
    getListUserError: (state: UserSlice) => {
      state.loadingGetList = false;
    },
    // logout
    logout: () => {
      return initialState;
    },
  },
  extraReducers(builder) {
    builder.addCase(hydrate, (state, action) => {
      return {
        ...state,
        ...action.payload[sliceName],
      };
    });
  },
});

export const getUserSlice = (state: RootState): UserSlice => state[sliceName];

export const {
  verifyOAuth2Start,
  verifyOAuth2Success,
  verifyOAuth2Error,
  verifyTokenStart,
  verifyTokenSuccess,
  verifyTokenError,
  registerStart,
  registerSuccess,
  registerError,
  loginStart,
  loginSuccess,
  loginError,
  updateProfileStart,
  updateProfileSuccess,
  updateProfileError,
  getListUserStart,
  getListUserSuccess,
  getListUserError,
  logout,
} = userSlice.actions;

export default persistReducer(getPersistConfig(sliceName, { whitelist: ['token', 'user'] }), userSlice.reducer);
