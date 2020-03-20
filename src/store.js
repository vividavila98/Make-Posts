import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import axiosMiddleWare from 'redux-axios-middleware'; 
import rootReducer from './reducers';

const initialState = {};

// array of middleware we're using to make API calls
const middleware = [axiosMiddleWare(axios)];

// createStore takes in rootreducer, initial state, and enhancers
const store = createStore(
    rootReducer, 
    initialState, 
    // spread operator drops it into an array
    applyMiddleware(...middleware)
);

export default store;