import React from 'react'; 
import ReactDOM from 'react-dom'; 
import 'core-js';
import 'regenerator-runtime/runtime';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom'; 
import { HelmetProvider } from 'react-helmet-async'; 
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'; 
import { Provider } from 'react-redux'
import reducers from './reducers';
import { renderRoutes } from 'react-router-config'
import axios from 'axios'; 

const axiosInstance = axios.create({
    baseURL: '/api'
}); 

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

// Create Redux store with initial state
const store = createStore(reducers, preloadedState, applyMiddleware(thunk.withExtraArgument(axiosInstance))); 

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

