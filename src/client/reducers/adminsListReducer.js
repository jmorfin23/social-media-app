import { FETCH_ADMINS_LIST } from '../actions'; 

export default (state = [], action) => {
    switch(action.type) {
        case FETCH_ADMINS_LIST: 
            return action.payload.data; 
        default: 
            return state; 
    }
}