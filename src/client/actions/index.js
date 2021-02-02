import axios from 'axios'; 


// action creator to fetch current user
export const AUTH_CURRENT_USER = "AUTH_CURRENT_USER"; 
export const authCurrentUser = () => async (dispatch, getState, api) => {
    // const res = await api.get('/current_user');
    
}; 


// __ Fetch Any User __ //
export const FETCH_USER_DATA = "FETCH_USER_DATA"; 
export const fetchUserData = (user) => async(dispatch, getState, api) => {

}

// __ LOGIN USER AFTER LOGIN FORM SUBMIT __ //
export const SET_ERRORS = "SET_ERRORS"; 
export const LOGIN_USER = "LOGIN_USER";
export const loginUser = (userInfo, history) => async(dispatch, getState, api) => {
    // Set loading 
    try {
        const res = await api.post('/login_user', userInfo);
        
        dispatch({ type: LOGIN_USER }); 
        
        // Push to home page 
        history.push('/'); 
    } catch(err) {
        console.log(err); 
        console.log(err.response)
    }
}


