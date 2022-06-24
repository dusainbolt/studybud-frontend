import {
  GetListUserResponse,
  LoginAction,
  RegisterAction,
  UpdateProfileAction,
  VerifyOAuth2Action,
  VerifyTokenAction,
} from '@redux/actions/userAction';
import {
  getListUserError,
  getListUserStart,
  getListUserSuccess,
  loginError,
  loginStart,
  loginSuccess,
  registerError,
  registerStart,
  registerSuccess,
  updateProfileStart,
  updateProfileSuccess,
  verifyOAuth2Error,
  verifyOAuth2Start,
  verifyOAuth2Success,
  verifyTokenStart,
  verifyTokenSuccess,
} from '@redux/slices/userSlice';
import axios from '@request/axios';
import { loginUserMutation } from '@request/graphql/mutation/login-user.mutation';
import { registerUserMutation } from '@request/graphql/mutation/register-user.mutation';
import { updateUserMutation } from '@request/graphql/mutation/update-user.mutation';
import { getUserQuery } from '@request/graphql/query/get-user.query';
import { searchUserQuery } from '@request/graphql/query/search-user.query';
import { SocialType } from '@type/user';
import { toast } from 'react-toastify';
import { delay, put, takeEvery } from 'redux-saga/effects';
import { verifyFacebookAPI, verifyGoogleAPI, verifyTokenAPI } from 'src/request/axios/userRequest';
import Constant from 'src/utils/constant';

function* watchVerifyOAuth2({ payload }: VerifyOAuth2Action) {
  try {
    const response =
      payload.type === SocialType.FACEBOOK ? yield verifyFacebookAPI(payload) : yield verifyGoogleAPI(payload);
    if (Constant.code.SUCCESS_RESPONSE === response?.code) {
      yield delay(1000);
      yield put(verifyOAuth2Success(response.data));
      yield axios.setTokenRequest(response.data?.token as any);
    } else {
      yield put(verifyOAuth2Error());
    }
  } catch (error: any) {
    yield put(verifyOAuth2Error());
  }
}

function* WatchGetListUser() {
  try {
    const response: GetListUserResponse = yield searchUserQuery();
    yield put(getListUserSuccess(response));
  } catch (error: any) {
    yield put(getListUserError());
  }
}

function* WatchUpdateProfile({ payload }: UpdateProfileAction) {
  try {
    const response: GetListUserResponse = yield updateUserMutation(payload.variables);
    if (response) {
      const responseGetUser = yield getUserQuery({ credential: payload.userId as any });
      yield put(updateProfileSuccess(responseGetUser));
      toast.success('Cập nhật thành công');
    } else {
      yield put(getListUserError());
    }
  } catch (error: any) {
    yield put(getListUserError());
  }
}

function* watchVerifyToken({ payload }: VerifyTokenAction) {
  try {
    yield delay(1500);
    const response = yield verifyTokenAPI(payload);
    if (Constant.code.SUCCESS_RESPONSE === response?.code) {
      yield put(verifyTokenSuccess(response.data));
      // yield axios.setTokenRequest(response.data?.token as any);
    } else {
      yield put(verifyOAuth2Error());
    }
  } catch (error: any) {
    yield put(verifyOAuth2Error());
  }
}

function* watchRegister({ payload }: RegisterAction) {
  try {
    const response = yield registerUserMutation(payload);
    if (response) {
      yield put(registerSuccess(response));
    } else {
      yield put(registerError());
    }
  } catch (error: any) {
    yield put(registerError());
  }
}

function* watchLogin({ payload }: LoginAction) {
  try {
    const response = yield loginUserMutation(payload);
    yield delay(1000);
    if (response) {
      yield put(loginSuccess(response));
    } else {
      yield put(loginError());
    }
  } catch (error: any) {
    yield put(loginError());
  }
}

export default function* userSaga(): any {
  yield takeEvery(registerStart, watchRegister);
  yield takeEvery(loginStart, watchLogin);
  yield takeEvery(verifyTokenStart, watchVerifyToken);
  yield takeEvery(verifyOAuth2Start, watchVerifyOAuth2);
  yield takeEvery(getListUserStart, WatchGetListUser);
  yield takeEvery(updateProfileStart, WatchUpdateProfile);
}
