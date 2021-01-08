
// Testing redux 
const initialState = {
    isLoaded: false, 
    counter: 0 
}

export const sampleReducer = (state = initialState, action) => {
    switch(action.type) {
        case "INCREMENT": 
            return {
                ...state, 
                counter: state.counter + 1
            }
        case "DECREMENT": 
        return {
            ...state, 
            counter: state.counter - 1
        }
        default: 
            return state;
    }
}