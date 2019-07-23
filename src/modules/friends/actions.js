import {
  GET_ALL_FRIENDS,
  PUT_ALL_FRIENDS,
  PUT_FRIEND,
  DELETE_FRIEND,
  STAR_FRIEND,
  GET_FRIEND,
  SAVE_FRIEND,
} from './constants';

export const getAllFriends = () => ({
  type: GET_ALL_FRIENDS,
});

export const getFriend = () => ({
  type: GET_FRIEND,
});

export const putAllFriends = friends => ({
  type: PUT_ALL_FRIENDS,
  data: friends,
});

export const saveFriend = friend => ({
  type: SAVE_FRIEND,
  data: friend,
});

export const putFriend = friend => ({
  type: PUT_FRIEND,
  data: friend,
});

export const deleteFriend = id => ({
  type: DELETE_FRIEND,
  id,
});

export const starFriend = id => ({
  type: STAR_FRIEND,
  id,
});
