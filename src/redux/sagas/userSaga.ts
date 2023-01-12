import { VerifyOAuth2Action } from '@redux/actions/userAction';
import { verifyOAuth2Error, verifyOAuth2Start, verifyOAuth2Success } from '@redux/slices/userSlice';
import axios from '@request/axios';
import { verifyFacebookAPI, verifyGoogleAPI } from '@request/userRequest';
import { SocialType } from '@type/user';
import { delay, put, takeEvery } from 'redux-saga/effects';
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

export default function* authSaga(): any {
  yield takeEvery(verifyOAuth2Start, watchVerifyOAuth2);
}
