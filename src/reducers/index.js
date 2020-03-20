import { combineReducers } from 'redux'; // function to combine all reducers
import postReducer from './postReducer';

// combine all of our reducers using the function combineReducers
export default combineReducers({
    posts: postReducer // named postReducer as post
});