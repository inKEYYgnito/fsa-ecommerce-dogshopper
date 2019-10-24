import { ACTION_TYPE } from '../../commons/constants';

const { ADD_TO_CRATE } = ACTION_TYPE;

const createReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CRATE:
      return [...state, action.dogId];
    default:
      return state;
  }
};

export default createReducer;
