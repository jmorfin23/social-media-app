import { SET_ERRORS, LOADING_START, CLEAR_ERRORS } from '../actions/types'; 


const initialState = {
    loading: false, 
    errors: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case LOADING_START: 
            return {
                ...state,
                loading: true
            } 
        case CLEAR_ERRORS: 
            return {
                ...state, 
                loading: false, 
                errors: null
            }
        case SET_ERRORS: 
            return {
                ...state,
                loading: false, 
                errors: action.payload, 
            } 
        default: 
            return state;
    }; 
}; 

