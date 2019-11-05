import axios from 'axios';

import { removeDog } from '../actions/actions';
import { ACTION_TYPE } from '../../commons/constants';
const { ADD_TO_CRATE, SET_CRATE, REMOVE_FROM_CRATE } = ACTION_TYPE;

const getCrateFromStorage = () => {
  const crate = sessionStorage.getItem('crate');
  return crate ? JSON.parse(crate) : [];
};

const addToCrateFromStorage = dogId => {
  const crate = getCrateFromStorage();
  sessionStorage.setItem('crate', JSON.stringify([...crate, dogId]));
};

const removeFromCrateFromStorage = dogId => {
  const crate = getCrateFromStorage();
  sessionStorage.setItem(
    'crate',
    JSON.stringify(crate.filter(dog => dog !== dogId))
  );
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

const checkoutCrate = ({ order, crate }) => {
  return async dispatch => {
    try {
      const confirmedOrder = (await axios.post('/api/orders', { order, crate }))
        .data;
      crate.forEach(dogId => dispatch(removeDog(dogId)));

      // empty crate from session storage
    } catch (e) {
      console.log(e);
    }
  };
};

export { addToCrate, removeFromCrate, getCrate, checkoutCrate };
