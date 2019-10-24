import { ACTION_TYPE } from '../../commons/constants';

const { ADD_TO_CRATE, REMOVE_FROM_CRATE, SET_CRATE } = ACTION_TYPE;

const createReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CRATE:
      return [...state, action.dogId];
    case REMOVE_FROM_CRATE:
      return state.filter(dogId => dogId !== action.dogId);
    case SET_CRATE:
      return action.crate;
    default:
      return state;
  }
};

export default createReducer;
