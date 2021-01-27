import React, { Component } from 'react'; 
import './index.css' ;
import Profile from '../../components/profile-card'; 
import Posts from '../../components/profile-posts'; 

export default class ProfileView extends Component {
    render() {
        return(
            <div className="profile pad-2">
                <Profile /> 
                <Posts /> 
            </div>
        )
    }
}; 


