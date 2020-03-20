import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../actions/postActions';

const Postform = (props) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    // whatever the text area for body is changed to, save it to the state
    const onChange = event => {
        setBody(event.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();
        // save what we want to submit (title and body)
        // to post variable
        const post = {
            title: title,
            body: body
        }

        props.createPost(post);
        console.log('clicked');
    }

   return (
        <div>
            <h1>Add Posts</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Title: </label><br />
                    <input 
                    type='text' 
                    name='title' 
                    value={title} 
                    onChange={event => setTitle(event.target.value)} // save what's typed to state
                    />     
                </div>
                <br />
                <div>
                    <label>Body: </label><br />
                    <textarea name='body' type='text' value={body} onChange={onChange} />     
                </div>
                <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

Postform.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(Postform);