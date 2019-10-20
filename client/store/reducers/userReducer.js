import { ACTION_TYPE } from '../../commons/constants';

const { SET_USER } = ACTION_TYPE

const userReducer = (state = {}, {type, user}) => {
  switch (type) {
    case SET_USER:
      return user;
    default:
      return state;
  }
};

export default userReducer;
