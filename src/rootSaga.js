import { all } from 'redux-saga/effects';
import friendsSaga from './modules/friends/saga';

export default function* rootSaga() {
  yield all([friendsSaga()]);
}
