import React from 'react'; 
import { Helmet } from 'react-helmet-async'; 

// HOC 
import authRoute from '../../components/hocs/requireAuth'; 

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

export default authRoute(HomePage); 

 