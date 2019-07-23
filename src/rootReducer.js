import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import friends from './modules/friends/reducer';

export default history =>
  combineReducers({
    router: connectRouter(history),
    friends,
  });
