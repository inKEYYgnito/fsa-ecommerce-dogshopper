import { ACTION_TYPE } from '../../commons/constants';

const { SET_DOGS } = ACTION_TYPE

const dogReducer = (state = [], {type, dogs}) => {
  switch (type) {
    case SET_DOGS:
      return dogs;
    default:
      return state;
  }
};

export default dogReducer;
