import { createStore, applyMiddleware  } from 'redux'; 
import thunk from 'redux-thunk'; 
import reducers from '../client/reducers';
import axios from 'axios'; 

export default (req) => {

    // Create axios instance 
    // No proxy 
    const axiosInstance = axios.create({
        baseURL: 'http://localhost:5001', 
        headers: { cookie: req.get('cookie') || "" }
    }); 

    // Create a new Redux store instance
    const store = createStore(
        reducers, 
        {}, 
        applyMiddleware(thunk.withExtraArgument(axiosInstance))
    ); 

    return store; 
}