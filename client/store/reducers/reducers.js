import { combineReducers } from 'redux';
import dogReducer from './dogReducer';
import userReducer from './userReducer';

const reducer = combineReducers({
  user: userReducer,
  dogs: dogReducer
});

export default reducer;
