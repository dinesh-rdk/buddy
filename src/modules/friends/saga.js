import { call, put, takeLatest, all } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import sleep from '../../utils/sleep';
import friends from '../../data/friends';
import { putAllFriends, saveFriend } from './actions';
import { GET_ALL_FRIENDS, PUT_FRIEND, GET_FRIEND } from './constants';

function* getAllFriends() {
  try {
    // mimic backend call
    yield call(sleep, 500);
    // take data from local and perform action
    yield put(putAllFriends(friends));
  } catch (error) {
    // Do nothing for now!
  }
}

function* getFriend() {
  try {
    // mimic backend call
    yield call(sleep, 500);
    // take dummy data from local and perform action
    yield put(saveFriend(friends['1']));
  } catch (error) {
    // Do nothing for now!
  }
}

function* putFriend() {
  try {
    // mimic backend call
    yield call(sleep, 500);
    // redirect to /friends page on success
    yield put(push('/friends'));
  } catch (error) {
    // Do nothing for now!
  }
}

export default function* friendsSaga() {
  yield all([
    takeLatest(GET_ALL_FRIENDS, getAllFriends),
    takeLatest(GET_FRIEND, getFriend),
    takeLatest(PUT_FRIEND, putFriend),
  ]);
}
