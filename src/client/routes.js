import React from 'react'; 
import App from './App'; 
import loadable from '@loadable/component';

const HomePage = loadable(() => import('./views/homePageView')); 
// const AboutPage = loadable(() => import('./views/aboutPageView'));
const NotFoundPage = loadable(() => import('./components/not-found')); 
// const AdminPageView = loadable(() => import('./views/adminPageView'));
const ProfileView = loadable(() => import('./views/profilePageView')); 
const LoginView = loadable(() => import('./views/loginPageView')); 
// Must load actions separately due to incompatibility with @loadable/component
import { loadProfileData } from './load-data'; 

export default [
    {
        ...App, 
        routes: [
            {
                component: HomePage, 
                path: '/', 
                exact: true
            }, 
            {
                component: ProfileView, 
                path: '/profile/:user', 
                loadData: loadProfileData
            },
            {
                component: LoginView, 
                path: '/login'
            },
            {
                component: NotFoundPage, 
                path: ""
            }
        ]
    }, 
]; 



