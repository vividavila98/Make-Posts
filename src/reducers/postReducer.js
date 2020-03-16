import { GET_POSTS, NEW_POST } from '../actions/types';

// evaluate any actions that are commited
// actions: GET_POSTS and NEW_POST

// action types are constants
const initialState = {
    items: [], // posts that come in from action
    item: {} // single post added
}

// evaluates what type we're dealing with
// action will include type
export default function(state = initialState, action) {
    switch(action.type) {

    }
}