import {
  PUT_FRIEND,
  DELETE_FRIEND,
  STAR_FRIEND,
  PUT_ALL_FRIENDS,
  SAVE_FRIEND,
} from './constants';

export default (state = {}, action) => {
  switch (action.type) {
    case PUT_ALL_FRIENDS:
      return action.data;
    // Useless to put since we route to /friends. Just for showcase :B
    case PUT_FRIEND:
      return { ...state, [action.data.id]: action.data };
    case SAVE_FRIEND:
      return { ...state, [action.data.id]: action.data };
    case DELETE_FRIEND:
      const { [action.id]: _, ...rest } = state;
      return { ...rest };
    case STAR_FRIEND:
      return {
        ...state,
        [action.id]: { ...state[action.id], starred: true },
      };
    default:
      return state;
  }
};
