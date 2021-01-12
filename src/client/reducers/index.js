import React from 'react'; 
import { combineReducers } from 'redux';
import userReducer from './users'; 
import authReducer from './authReducer'; 
import adminReducer from './adminsListReducer'; 

export default combineReducers({
    users: userReducer, 
    auth: authReducer, 
    admins: adminReducer
}); 