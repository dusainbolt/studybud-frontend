import { all } from 'redux-saga/effects';
import userSaga from './sagas/userSaga';
import topicSaga from './sagas/topicSaga';

export default function* rootSaga(): any {
  yield all([userSaga(), topicSaga()]);
}
