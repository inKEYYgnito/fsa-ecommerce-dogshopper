import { ACTION_TYPE } from '../../commons/constants';
const { ADD_ORDER } = ACTION_TYPE;

const orderReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ORDER:
      return [action.order, ...state];
    default:
      return state;
  }
};

export default orderReducer;
