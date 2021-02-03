import 'regenerator-runtime/runtime';
import React from 'react'; 
import ReactDOM from 'react-dom'; 
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom'; 
import { HelmetProvider } from 'react-helmet-async'; 
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'; 
import { Provider } from 'react-redux';
import reducers from './reducers';
import { renderRoutes } from 'react-router-config'; 
import axios from 'axios'; 
import { loadableReady } from '@loadable/component';

const axiosInstance = axios.create({
    baseURL: '/api'
}); 

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

// Redux dev tools 
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// Create Redux store with initial state
const store = createStore(reducers, preloadedState, composeEnhancers(applyMiddleware(thunk.withExtraArgument(axiosInstance)))); 

loadableReady(() => {
    ReactDOM.hydrate(
        <React.StrictMode>
            <Provider store={store}>
                <HelmetProvider>
                    <BrowserRouter>
                        <div>{renderRoutes(Routes)}</div>
                    </BrowserRouter>
                </HelmetProvider>
            </Provider>
        </React.StrictMode>, 
        document.querySelector('#root')
    )
}); 

