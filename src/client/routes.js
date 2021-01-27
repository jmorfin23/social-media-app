import React from 'react'; 
import App from './App'; 
import loadable from '@loadable/component';

const HomePage = loadable(() => import('./views/homePageView')); 
const AboutPage = loadable(() => import('./views/aboutPageView'));
const NotFoundPage = loadable(() => import('./components/not-found')); 
const AdminPageView = loadable(() => import('./views/adminPageView'));
const ProfileView = loadable(() => import('./views/profilePageView')); 

// Must load actions separately due to incompatibility with @loadable/component
import { loadAdminData, loadAboutData, loadProfileData } from './load-data'; 

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
                component: AboutPage, 
                loadData: loadAboutData,
                path: '/about', 
            },
            {
                component: AdminPageView,
                loadData: loadAdminData,
                path: '/admins'
            },
            {
                component: ProfileView, 
                path: '/profile/:user', 
                loadData: loadProfileData
            },
            {
                component: NotFoundPage, 
                path: ""
            }
        ]
    }, 
]; 



