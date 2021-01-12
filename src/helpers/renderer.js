import React from 'react'; 
import ReactDOMServer from 'react-dom/server'; 
import Routes from '../client/routes';
import HTMLTemplate from './createHTMLTemplate'; 
import { HelmetProvider } from 'react-helmet-async' 
import { StaticRouter } from 'react-router'; 
import { Provider } from 'react-redux'; 
import { renderRoutes } from 'react-router-config'

export default (req, store, context) => {
    const helmetContext = {}
    // Some logic to load and initialize data into the store 

    // Render the component to a string
    const component = ReactDOMServer.renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={context}>
                <HelmetProvider context={helmetContext}>
                    <div>{renderRoutes(Routes)}</div>
                </HelmetProvider>
            </StaticRouter>
        </Provider>
    );
  
    // Get initial state from redux store
    const preloadedState = store.getState(); 
    
    const { helmet } = helmetContext; 
    return `<!DOCTYPE html>${HTMLTemplate(component, helmet, preloadedState)}`
}