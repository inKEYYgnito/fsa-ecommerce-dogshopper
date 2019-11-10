import axios from 'axios';

import { removeDog, addOrder } from '../actions/actions';
import { ACTION_TYPE, CRATE, ROUTE_PATH } from '../../commons/constants';
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

const sendConfirmationMail = async templateParams => {
  try {
    const serviceId = 'gmail';
    const templateId = 'template_mOcErIlk';
    const response = await window.emailjs.send(
      serviceId,
      templateId,
      templateParams
    );
    console.log('Email confirmation is sent!', response, templateParams);
    console.log('done');
  } catch (error) {
    console.warning('Failed to send email confirmation with:', {
      templateParams,
      error
    });
  }
};

const checkoutCrate = ({ userName, order, crate, history }) => {
  return async dispatch => {
    try {
      const confirmedOrder = (await axios.post('/api/orders', { order, crate }))
        .data;
      crate.forEach(dogId => dispatch(removeDog(dogId)));
      dispatch(emptyCrate());
      dispatch(addOrder(confirmedOrder));
      const templateParams = {
        userName,
        orderId: confirmedOrder.id,
        orderTotal: confirmedOrder.orderItems.reduce(
          (acc, item) => acc + parseFloat(item.price),
          0
        ),
        ...order
      };
      await sendConfirmationMail(templateParams);
      history.push(`${ROUTE_PATH.ORDER_CONFIRMED}/${confirmedOrder.id}`);
    } catch (e) {
      console.log(e);
    }
  };
};

export { addToCrate, removeFromCrate, getCrate, checkoutCrate };
