import React from 'react'; 

// Redux 
import { combineReducers } from 'redux';

// Reducers 
import userReducer from './userReducer'; 
import profileReducer from './profileReducer';
import uiReducer from './uiReducer';  

export default combineReducers({
    user: userReducer, 
    profile: profileReducer, 
    UI: uiReducer
}); 