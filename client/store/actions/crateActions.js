import axios from 'axios';

import { removeDog } from '../actions/actions';
import { ACTION_TYPE, CRATE } from '../../commons/constants';
const { ADD_TO_CRATE, SET_CRATE, REMOVE_FROM_CRATE, EMPTY_CRATE } = ACTION_TYPE;

const getCrateFromStorage = () => {
  const crate = sessionStorage.getItem(CRATE);
  return crate ? JSON.parse(crate) : [];
};

const addToCrateFromStorage = dogId => {
  const crate = getCrateFromStorage();
  sessionStorage.setItem(CRATE, JSON.stringify([...crate, dogId]));
};

const removeFromCrateFromStorage = dogId => {
  const crate = getCrateFromStorage();
  sessionStorage.setItem(
    CRATE,
    JSON.stringify(crate.filter(dog => dog !== dogId))
  );
};

const emptyCrateFromStorage = () => {
  sessionStorage.setItem(CRATE, JSON.stringify([]));
};

const addToCratetAction = dogId => {
  return {
    type: ADD_TO_CRATE,
    dogId
  };
};

const removeFromCrateAction = dogId => {
  return {
    type: REMOVE_FROM_CRATE,
    dogId
  };
};

const setCratetAction = crate => {
  return {
    type: SET_CRATE,
    crate
  };
};

const emptyCrateAction = () => {
  return {
    type: EMPTY_CRATE
  };
};

const addToCrate = dogId => {
  return async dispatch => {
    addToCrateFromStorage(dogId);
    return dispatch(addToCratetAction(dogId));
  };
};

const removeFromCrate = dogId => {
  return async dispatch => {
    removeFromCrateFromStorage(dogId);
    return dispatch(removeFromCrateAction(dogId));
  };
};

const getCrate = () => {
  return async dispatch => {
    const crate = getCrateFromStorage();
    return dispatch(setCratetAction(crate));
  };
};

const emptyCrate = () => {
  return async dispatch => {
    emptyCrateFromStorage();
    return dispatch(emptyCrateAction());
  };
};

const checkoutCrate = ({ order, crate }) => {
  return async dispatch => {
    try {
      const confirmedOrder = (await axios.post('/api/orders', { order, crate }))
        .data;
      crate.forEach(dogId => dispatch(removeDog(dogId)));
      dispatch(emptyCrate());
    } catch (e) {
      console.log(e);
    }
  };
};

export { addToCrate, removeFromCrate, getCrate, checkoutCrate };
