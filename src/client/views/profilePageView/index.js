import React from 'react'; 
import { useSelector } from "react-redux";
import './index.css' ;
import Profile from '../../components/profile-card'; 
import Posts from '../../components/profile-posts'; 

export default ({ staticContext = {} }) => {
    const state = useSelector(state => state);
    console.log(
        'inside profileview '
    ) 
    console.log(state)
    
    return(
        <div className="profile pad-2">
            <Profile /> 
            <Posts /> 
        </div>
    )
}; 


