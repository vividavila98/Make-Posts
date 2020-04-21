import React, { useEffect }  from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../actions/postActions';

const Posts = (props) => {
    useEffect(() => {
        props.getPosts(); 
    });



    // iterate through state posts array to return title and body of text 
    // posts comes with userId, id, title, and body
    const postItems = props.posts.map(post => (
        <div key={post.id} actions={props.getPosts}>
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

// type checking props
Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object.isRequired
}

// in rootreducer, we set our reducer postReducer to posts,
// so here it's state.posts
const mapStateToProps = state => ({      
    posts: state.posts.items,
    newPost: state.posts.item
});

export default connect(mapStateToProps, { getPosts })(Posts);