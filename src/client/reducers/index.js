import React from 'react'; 
import { combineReducers } from 'redux';
import { sampleReducer } from './sample-reducer.js'; 

export const rootReducer = combineReducers({
    sample: sampleReducer
})