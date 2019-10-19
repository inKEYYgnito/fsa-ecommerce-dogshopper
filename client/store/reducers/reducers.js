import { combineReducers } from 'redux';
import dogReducer from './dogReducer';

const reducer = combineReducers({
  dogs: dogReducer
});

export default reducer;
