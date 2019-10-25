export const ACTION_TYPE = {
  SET_BREEDS: 'SET_BREEDS',
  SET_DOGS: 'SET_DOGS',
  SET_USER: 'SET_USER',
  ADD_TO_CRATE: 'ADD_TO_CRATE',
  REMOVE_FROM_CRATE: 'REMOVE_FROM_CRATE',
  SET_CRATE: 'SET_CRATE'
};

const USER = 'user';
const DOGS = 'dogs'
const CRATE = 'crate';

export const ROUTE_PATH = {
  DOGS: `/${DOGS}`,
  DOG: `/${DOGS}/:id`,
  USER_PROFILE: `/${USER}/profile`,
  USER_ORDERS: `/${USER}/orders`,
  CRATE: `/${CRATE}`,
  CRATE_CHECKOUT: `/${CRATE}/checkout`
};
