import React, { useEffect }  from 'react';
//import { connect } from 'react-redux';
//import { getPosts } from '../actions/postActions';

const Posts = () => {
    console.log('in posts');

    // iterate through state posts array to return title and body of text 
    // posts comes with userId, id, title, and body
    const postItems = posts.map(post => (
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    ));

    return (
        <div>
            <h1>Posts</h1>
            { postItems }
        </div>
    );
}

export default Posts;