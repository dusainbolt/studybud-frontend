import { getAllTopicError, getAllTopicStart, getAllTopicSuccess } from '@redux/slices/topicSlice';
import { getAllTopicQuery } from '@request/graphql/query/get-all-topic.query';
import { put, takeEvery } from 'redux-saga/effects';

function* watchGetAllTopic() {
  try {
    const response = yield getAllTopicQuery();
    if (response) {
      yield put(getAllTopicSuccess(response));
    } else {
      yield put(getAllTopicError());
    }
  } catch (error: any) {
    yield put(getAllTopicError());
  }
}

export default function* topicSaga(): any {
  yield takeEvery(getAllTopicStart, watchGetAllTopic);
}
