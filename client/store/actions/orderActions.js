import axios from 'axios';

import { ACTION_TYPE } from '../../commons/constants';
const { ADD_ORDER, SET_ORDERS } = ACTION_TYPE;

const addOrderAction = order => {
  return {
    type: ADD_ORDER,
    order
  };
};

const setOrdersAction = orders => {
  return {
    type: SET_ORDERS,
    orders
  };
};

const addOrder = order => addOrderAction(order);

const getOrders = () => {
  return async dispatch => {
    const orders = (await axios.get('/api/orders')).data;
    return dispatch(setOrdersAction(orders));
  };
};

export { addOrder, getOrders };
