import { ACTION_TYPE } from '../../commons/constants';
const { ADD_ORDER } = ACTION_TYPE;

const addOrderAction = order => {
  return {
    type: ADD_ORDER,
    order
  };
};

const addOrder = order => addOrderAction(order);

export { addOrder };
