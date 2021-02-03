import { LOGIN_USER, LOADING_START, CLEAR_ERRORS, SET_ERRORS } from './types'; 

// action creator to fetch current user
export const authCurrentUser = () => async (dispatch, getState, api) => {
    // TODO: 
    // const res = await api.get('/current_user');
    
}; 


// __ Fetch Any User __ //
export const fetchUserData = (user) => async(dispatch, getState, api) => {
    // TODO: 
}

// __ LOGIN USER AFTER LOGIN FORM SUBMIT __ //
export const loginUser = (userInfo, history) => async(dispatch, getState, api) => {

    // SET LOADING 
    dispatch({ type: LOADING_START }); 

    // LOGIN USER 
    try {
        const res = await api.post('/login', userInfo);
        
        // set auth to true 
        dispatch({ type: LOGIN_USER }); 

        // Clear any errors and set loading false
        dispatch({ type: CLEAR_ERRORS }); 

        // Call user data from component

        // Push to home page 
        history.push('/'); 
    } catch(err) {
        console.log(err); 
        console.log(err.response)

        // set errors TODO: 
        // dispatch({ type: SET_ERRORS, payload: err.response.data }); 
    }

}


// __ Register New User ___ // 
export const registerUser = (userInfo, history) => async(dispatch, getState, api) => {
    // ... 

}


