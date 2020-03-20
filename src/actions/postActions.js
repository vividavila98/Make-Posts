import { GET_POSTS, NEW_POST } from './types';
import Axios from 'axios';

// Action creator function 
export const getPosts = () => dispatch => {
    Axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.data)
    .then(posts => 
        dispatch({
            type: GET_POSTS,
            payload: posts
        })  
    )
};

export const createPost = (postData) => dispatch => {
    console.log('action called')
    Axios.post('https://jsonplaceholder.typicode.com/posts', {
        headers: {
            'content-type': 'application/json'
        },
        body: postData
    })
    .then(res => res.data)
    .then(post => 
        dispatch({
            type: NEW_POST,
            payload: post
        })  
    )
};

