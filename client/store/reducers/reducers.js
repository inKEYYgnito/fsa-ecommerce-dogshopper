import { combineReducers } from 'redux';
import breedReducer from './breedReducer';
import dogReducer from './dogReducer';
import userReducer from './userReducer';
import crateReducer from './crateReducer';

const reducer = combineReducers({
  user: userReducer,
  breeds: breedReducer,
  dogs: dogReducer,
  crate: crateReducer
});

export default reducer;
