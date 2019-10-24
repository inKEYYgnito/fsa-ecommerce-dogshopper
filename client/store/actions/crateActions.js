import { ACTION_TYPE } from '../../commons/constants';

const { ADD_TO_CRATE } = ACTION_TYPE;

const getCrateFromStorage = () => {
  const crate = sessionStorage.getItem('crate');
  return crate ? JSON.parse(crate) : [];
};

const addToCrateFromStorage = dogId => {
  const crate = getCrateFromStorage();
  sessionStorage.setItem('crate', JSON.stringify([...crate, dogId]));
};

const addToCratetAction = dogId => {
  return {
    type: ADD_TO_CRATE,
    dogId
  };
};

const addToCrate = dogId => {
  return async dispatch => {
    addToCrateFromStorage(dogId);
    return dispatch(addToCratetAction(dogId));
  };
};

export { addToCrate };
