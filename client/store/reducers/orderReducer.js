import { ACTION_TYPE } from '../../commons/constants';
const { ADD_ORDER, SET_ORDERS } = ACTION_TYPE;

const orderReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ORDER:
      return [action.order, ...state];
    case SET_ORDERS:
      return action.orders;
    default:
      return state;
  }
};

export default orderReducer;
