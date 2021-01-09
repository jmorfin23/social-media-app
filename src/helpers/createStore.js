import { createStore, applyMiddleware  } from 'redux'; 
import thunk from 'redux-thunk'; 
import { rootReducer } from '../client/reducers'; 

export default () => {
    // Create a new Redux store instance
    const store = createStore(rootReducer, {}, applyMiddleware(thunk)); 

    return store; 
}