import React from 'react'; 
import ReactDOM from 'react-dom'; 
import { App } from './App';
import { BrowserRouter } from 'react-router-dom'; 
import { HelmetProvider } from 'react-helmet-async'; 
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './reducers';


// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__

// Create Redux store with initial state
const store = createStore(rootReducer, preloadedState); 

ReactDOM.hydrate(
    <React.StrictMode>
        <Provider store={store}>
            <HelmetProvider>
                <BrowserRouter>
                    <App /> 
                </BrowserRouter>
            </HelmetProvider>
        </Provider>
    </React.StrictMode>, 
    document.querySelector('#root')
)

