import { combineReducers } from 'redux';
import breedReducer from './breedReducer';
import dogReducer from './dogReducer';
import userReducer from './userReducer';

const reducer = combineReducers({
  user: userReducer,
  breeds: breedReducer,
  dogs: dogReducer
});

export default reducer;
