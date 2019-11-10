export const ACTION_TYPE = {
  SET_BREEDS: 'SET_BREEDS',
  SET_DOGS: 'SET_DOGS',
  REMOVE_DOG: 'REMOVE_DOG',
  SET_USER: 'SET_USER',
  ADD_TO_CRATE: 'ADD_TO_CRATE',
  REMOVE_FROM_CRATE: 'REMOVE_FROM_CRATE',
  EMPTY_CRATE: 'EMPTY_CRATE',
  SET_CRATE: 'SET_CRATE',
  ADD_ORDER: 'ADD_ORDER',
  SET_ORDERS: 'SET_ORDERS'
};

const DOGS = 'dogs';
const ORDERS = 'orders';
export const CRATE = 'crate';

export const ROUTE_PATH = {
  DOGS: `/${DOGS}`,
  DOG: `/${DOGS}/:id`,
  USER_PROFILE: `/profile`,
  ORDERS: `/${ORDERS}`,
  ORDER_CONFIRMED: `/${ORDERS}/confirmed`,
  CRATE: `/${CRATE}`,
  CRATE_CHECKOUT: `/${CRATE}/checkout`
};
