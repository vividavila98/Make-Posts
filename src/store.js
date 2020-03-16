import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

// array of middleware we're using to make API calls
const middleware = [thunk];

// store takes in rootreducer, initial state, and enhancers
const store = createStore(
    rootReducer, 
    initialState, 
    // spread operator drops it into an array
    applyMiddleware(...middleware)
);

export default store;