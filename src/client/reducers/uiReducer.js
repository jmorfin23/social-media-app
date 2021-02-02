import { SET_ERRORS } from '../actions'; 


const initialState = {
    loading: false, 
    errors: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case SET_ERRORS: 
        return {
            ...state,
            errors: action.payload
        } 
        default: 
            return state;
    }; 
}; 

