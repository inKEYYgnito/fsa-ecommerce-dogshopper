import { ACTION_TYPE } from '../../commons/constants';

const { SET_BREEDS } = ACTION_TYPE;

const breedReducer = (state = [], { type, breeds }) => {
  switch (type) {
    case SET_BREEDS:
      return breeds;
    default:
      return state;
  }
};

export default breedReducer;
