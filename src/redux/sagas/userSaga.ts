import { GetListUserResponse, UpdateProfileAction, VerifyOAuth2Action } from '@redux/actions/userAction';
import {
  getListUserError,
  getListUserStart,
  getListUserSuccess,
  updateProfileStart,
  updateProfileSuccess,
  verifyOAuth2Error,
  verifyOAuth2Start,
  verifyOAuth2Success,
} from '@redux/slices/userSlice';
import axios from '@request/axios';
import { updateUserMutation } from '@request/graphql/mutation/update-user.mutation';
import { getUserQuery } from '@request/graphql/query/get-user.query';
import { searchUserQuery } from '@request/graphql/query/search-user.query';
import { SocialType } from '@type/user';
import { toast } from 'react-toastify';
import { delay, put, takeEvery } from 'redux-saga/effects';
import { verifyFacebookAPI, verifyGoogleAPI } from 'src/request/axios/userRequest';
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

export default function* authSaga(): any {
  yield takeEvery(verifyOAuth2Start, watchVerifyOAuth2);
  yield takeEvery(getListUserStart, WatchGetListUser);
  yield takeEvery(updateProfileStart, WatchUpdateProfile);
}
