import React from 'react'; 
import './index.css'; 

export default ({ user }) => {
    return(
        <div className="profile-info pad-1">
            <img src="https://placehold.it/300x300" alt="profile-picture" />
            <h3>@{user}</h3>
            <div>
                <h4>Bio:</h4>
                <p>lorem ;asjdf as;dkfj asdlfkja sdfkaljsd fasdf; asjdf;alkjs df;alksj fdas;lkdfj alf;d</p>
            </div>
            <div>
                Follow: 
                <button type="button">Follow</button>
            </div>
        </div>
    )
}