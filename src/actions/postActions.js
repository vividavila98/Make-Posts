import { GET_POSTS, NEW_POST } from './types';

// Action creator function 
export const getPosts = () => {
    console.log('helloooooo');
    // returns action object with type and payload
    // this action will be dispatched to reducer 
    return {
        type: GET_POSTS,
        // payload is data from get request
        payload: {
            request: {
                method: 'get',
                url: 'https://jsonplaceholder.typicode.com/posts',
            },
        },
    };
};