import React from 'react'; 
import App from './App'; 
import loadable from '@loadable/component';

// Page Views 
const Home = loadable(() => import('./views/home')); 
const NotFound = loadable(() => import('./components/not-found')); 
const Profile = loadable(() => import('./views/profile')); 
const Login = loadable(() => import('./views/login')); 
const Register = loadable(() => import('./views/register'))

// Must load actions separately due to incompatibility with @loadable/component
import { loadProfileData } from './load-data'; 

export default [
    {
        ...App, 
        routes: [
            {
                component: Home, 
                path: '/', 
                exact: true
            }, 
            {
                component: Profile, 
                path: '/profile/:user', 
                loadData: loadProfileData
            },
            {
                component: Login, 
                path: '/login'
            },
            {
                component: Register, 
                path: '/register'
            },
            {
                component: NotFound, 
                path: ""
            }
        ]
    }, 
]; 



