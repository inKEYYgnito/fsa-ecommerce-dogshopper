import { ACTION_TYPE } from '../../commons/constants';

const { SET_DOGS, REMOVE_DOG } = ACTION_TYPE;

const dogReducer = (state = [], action) => {
  switch (action.type) {
    case SET_DOGS:
      return action.dogs;
    case REMOVE_DOG:
      return state.filter(dog => dog.id !== action.dogId);
    default:
      return state;
  }
};

export default dogReducer;
