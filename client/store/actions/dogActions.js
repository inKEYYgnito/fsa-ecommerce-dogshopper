import axios from 'axios';
import { ACTION_TYPE } from '../../commons/constants';

const { SET_DOGS, REMOVE_DOG } = ACTION_TYPE;

const setDogsAction = dogs => {
  return {
    type: SET_DOGS,
    dogs
  };
};

const removeDogAction = dogId => {
  return {
    type: REMOVE_DOG,
    dogId
  };
};

const getDogs = () => {
  return async dispatch => {
    const dogs = (await axios.get('/api/dogs')).data;
    return dispatch(setDogsAction(dogs));
  };
};

const removeDog = dogId => removeDogAction(dogId);

export { getDogs, removeDog };
