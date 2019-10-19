import GET_DOGS from '../constants/constants';

const dogReducer = (state = [], action) => {
  switch (action.type) {
    case GET_DOGS:
      return action.dogs;
  }
  return state;
};

export default dogReducer;
