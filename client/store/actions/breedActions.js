import axios from 'axios';
import { ACTION_TYPE } from '../../commons/constants';

const { SET_BREEDS } = ACTION_TYPE;

const setBreedsAction = breeds => {
  return {
    type: SET_BREEDS,
    breeds
  };
};

const getBreeds = () => {
  return async dispatch => {
    const breeds = (await axios.get('/api/breeds')).data;
    return dispatch(setBreedsAction(breeds));
  };
};

export { getBreeds };
