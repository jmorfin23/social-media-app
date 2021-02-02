import { LOGIN_USER } from '../actions'; 

const initialState = {
    auth: false, 
    loading: false, 
    credentials: {} 
}

export default (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_USER: 
            return {
                ...state, 
                auth: true 
            }
        default: 
            return state; 
    }
}