import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Posts = () => {
    // states 
    const [posts, setPosts] = useState([]);
   
    // where to make API request using axios
    useEffect(() => {
        // Axios GET request with async/await
        async function makeGetRequest() {
            let res = 
            await Axios.get('https://jsonplaceholder.typicode.com/posts');
            let data = res.data; // res.data is payload info returned from server
            setPosts(data); // change state of posts to info returned from server
            //console.log(`here are our posts: ${posts}`);
        }
        makeGetRequest(); // call function to make request
    });

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