import React from 'react'; 
import ReactDOMServer from 'react-dom/server'; 
import { Routes } from '../client/routes';
import HTMLTemplate from './createHTMLTemplate'; 
import { HelmetProvider } from 'react-helmet-async' 
import { StaticRouter } from 'react-router'; 
import { Provider } from 'react-redux'; 


export default (req, store) => {
    const helmetContext = {}
    // Some logic to load and initialize data into the store 

    // Render the component to a string
    const component = ReactDOMServer.renderToString(
        <Provider store={store}>
            <StaticRouter location={req} context={{}}>
                <HelmetProvider context={helmetContext}>
                    <Routes />
                </HelmetProvider>
            </StaticRouter>
        </Provider>
    );
  
    // Get initial state from redux store
    const preloadedState = store.getState(); 
    
    const { helmet } = helmetContext; 
    return `<!DOCTYPE html>${HTMLTemplate(component, helmet, preloadedState)}`
}