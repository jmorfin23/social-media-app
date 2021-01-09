import React from 'react'; 
import { HomePage } from './views/homePageView'; 
import { AboutPage } from './views/aboutPageView'; 
import { Switch, Route } from 'react-router'; 


export const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" render={() => <HomePage />}/> 
            <Route path="/about" render={() => <AboutPage />}/>
            <Route render={() => <p>not found</p>} /> 
        </Switch>        
    )
}
