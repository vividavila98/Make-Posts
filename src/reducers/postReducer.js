import { GET_POSTS, NEW_POST } from '../actions/types';

// evaluate any actions that are commited
// actions: getting a post and creating a new post


const initialState = {
    items: [], // posts that come in from action
    item: {} // single post added
}

// evaluates which action type we're dealing with
export default function(state = initialState, action) {
    // checks what action.type equals to 
    switch(action.type) {
        case GET_POSTS:
            return {
                ...state, // return current state
                items: action.payload // set items state to action.payload
            }
        default:
            return state;
    }
}
