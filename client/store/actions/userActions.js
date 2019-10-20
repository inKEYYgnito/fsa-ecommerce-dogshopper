import axios from 'axios';
import { ACTION_TYPE } from '../../commons/constants';

const { SET_USER } = ACTION_TYPE

const setUserAction = user => {
  return {
    type: SET_USER,
    user
  };
};

const getUser = () => {
  return async dispatch => {
    const user = (await axios.get('/api/user')).data;
    return dispatch(setUserAction(user));
  };
};

export { getUser };
