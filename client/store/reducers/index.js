import { combineReducers } from 'redux'
import GET_DOGS from '../constants/constants'
// import newReducer from './reducerFile'
const dogsReducer = (state =[], action) => {
    switch(action.type){
        case GET_DOGS:
           return action.dogs
    }
    return state
}

const reducer = combineReducers({
    dogs: dogsReducer
    // add reducers here
    // remove sample reducer
    //sampleReducer: (init = {}) => init
})

export default reducer
 