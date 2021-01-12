import React from 'react'; 
import { renderRoutes } from 'react-router-config'; 
import { fetchCurrentUser } from './actions'; 
import Header from './components/header'; 

export default {
   component: ({ route }) => {
    return(
        <div>
            <Header /> 
            {renderRoutes(route.routes)}
        </div>
    )
    }, 
    loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
}; 
