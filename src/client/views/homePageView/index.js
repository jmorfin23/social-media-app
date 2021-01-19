import React from 'react'; 
import './index.css'; 
import { Helmet } from 'react-helmet-async'; 

const HomePage = props => {
    return(
        <div className="homepage">
            <Helmet>
                <title>Home Page</title>
            </Helmet>
            <h1>Home Page</h1>
        </div>
    )
};

export default HomePage; 

 