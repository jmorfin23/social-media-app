import React from 'react'; 
import HomePage from './views/homePageView'; 
import AboutPage from './views/aboutPageView'; 
import NotFoundPage from './components/not-found'; 
import App from './App'; 
import AdminPageView from './views/adminPageView';

export default [
    {
        ...App, 
        routes: [
            {
                ...HomePage, 
                path: '/', 
                exact: true
            }, 
            {
                ...AboutPage, 
                path: '/about', 
            },
            {
                ...AdminPageView,
                path: '/admins'
            },
            {
                ...NotFoundPage, 
                path: ""
            }
        ]
    }, 
]; 



