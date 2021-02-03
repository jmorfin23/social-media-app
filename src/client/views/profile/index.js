import React from 'react'; 
import { useSelector } from "react-redux";
import './index.css' ;
import Credentials from '../../components/profile-card'; 
import Posts from '../../components/profile-posts'; 

const Profile =  ({ staticContext = {} }) => {
    const state = useSelector(state => state);

    return(
        <div className="profile pad-2">
            <Credentials /> 
            <Posts /> 
        </div>
    )
}; 

export default Profile; 

