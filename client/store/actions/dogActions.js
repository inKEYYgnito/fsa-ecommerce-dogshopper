import axios from 'axios';
import GET_DOGS from '../constants/constants';

const getDogsAction = dogs => {
  return {
    type: GET_DOGS,
    dogs
  };
};

const getDogs = () => {
  return async dispatch => {
    const dogs = (await axios.get('/api/dogs')).data;
    return dispatch(getDogsAction(dogs));
  };
};

export { getDogs };
