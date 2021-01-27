import axios from 'axios'; 

// Testing action creator 
export const FETCH_USERS = 'FETCH_USERS'; 
export const fetchUsers = () => async (dispatch, getState, api) => {
    const res = await api.get('/users'); 
    dispatch({
        type: FETCH_USERS, 
        payload: res
    }); 
}; 


// action creator to fetch current user
export const FETCH_CURRENT_USER = "FETCH_CURRENT_USER"; 
export const fetchCurrentUser = () => async (dispatch, getState, api) => {
    const res = await api.get('/current_user');  
    dispatch({
        type: FETCH_CURRENT_USER, 
        payload: res
    }); 
}; 

// action creator to fetch admins list 
export const FETCH_ADMINS_LIST = "FETCH_ADMINS_LIST"; 
export const fetchAdminsList = () => async (dispatch, getState, api) => {
    const res = await api.get('/admins'); 
    dispatch({
        type: FETCH_ADMINS_LIST, 
        payload: res
    }); 
}; 


export const FETCH_USER = "FETCH_USER"; 
export const fetchUser = (user) => async(dispatch, getState, api) => {

    const res = await axios.get('http://localhost:5001/api/testroute', {
        method: 'GET', 
        headers: {
            user: user
        }
    }); 
    if (res.data.error) {
        console.log('user not found')
    } else {
        // dispatch to reducer TODO
    }
    
}


