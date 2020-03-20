import { GET_POSTS } from './types';
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

