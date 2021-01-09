import React from 'react'; 
import { Helmet } from 'react-helmet-async'; 

export const AboutPage = () => {
    return(
        <div className="aboutpage">
            <Helmet>
                <title>About page</title>
            </Helmet>
            <h1>About page</h1>
        </div>
    )
}