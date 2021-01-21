import React from 'react'; 
import ReactDOMServer from 'react-dom/server'; 
import Routes from '../client/routes';
import HTMLTemplate from './createHTMLTemplate'; 
import { HelmetProvider } from 'react-helmet-async' 
import { Route, StaticRouter } from 'react-router'; 
import { Provider } from 'react-redux'; 
import { renderRoutes } from 'react-router-config'
import { ChunkExtractor } from '@loadable/server'; 
import path from 'path'; 
import { render } from 'react-dom';

export default (req, store, context) => {
    const helmetContext = {}

    const statsFile = path.resolve('./dist/public/loadable-stats.json');

    const webextractor = new ChunkExtractor({ statsFile }); 

    const app = webextractor.collectChunks(renderRoutes(Routes)); 

    const component = ReactDOMServer.renderToString(
            <Provider store={store}>
                <StaticRouter location={req.path} context={context}>
                    <HelmetProvider context={helmetContext}>
                            <div>{app}</div>
                    </HelmetProvider>
                </StaticRouter>
            </Provider>
    ); 
    
    // Collect scripts 
    const scripts = webextractor.getScriptTags({ async: false }) 
    // Collect styles 
    const styleTags = webextractor.getStyleTags(); 

    // Get initial state from redux store
    const preloadedState = store.getState(); 
    
    const { helmet } = helmetContext; 
    return `<!DOCTYPE html>${HTMLTemplate(component, helmet, preloadedState, scripts, styleTags)}`
}