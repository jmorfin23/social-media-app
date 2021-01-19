import React from 'react'; 
import App from './App'; 
import loadable from '@loadable/component';

const HomePage = loadable(() => import('./views/homePageView')); 
const AboutPage = loadable(() => import('./views/aboutPageView'));
const NotFoundPage = loadable(() => import('./components/not-found')); 
const AdminPageView = loadable(() => import('./views/adminPageView'));

// Must load actions separately due to incompatibility with @loadable/component
import loadAdminData from './views/adminPageView/load-data'; 
import loadAboutData from './views/aboutPageView/load-data';  



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
                component: NotFoundPage, 
                path: ""
            }
        ]
    }, 
]; 



