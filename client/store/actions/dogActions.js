import axios from 'axios';
import { ACTION_TYPE } from '../../commons/constants';

const { SET_DOGS } = ACTION_TYPE

const setDogsAction = dogs => {
  return {
    type: SET_DOGS,
    dogs
  };
};

const getDogs = () => {
  return async dispatch => {
    const dogs = (await axios.get('/api/dogs')).data;
    return dispatch(setDogsAction(dogs));
  };
};

export { getDogs };
