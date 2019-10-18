import axios from 'axios';
import GET_DOGS from '../constants/constants'


const getDogs = (dogs) => {
    return {
        type: GET_DOGS,
        dogs
    }
}

const getDogs_ = () => {
    return async(dispatch) => {
        const dogs = (await axios.get('/api/dogs')).data
        return dispatch(getDogs(dogs))
    }
}

export {getDogs_}