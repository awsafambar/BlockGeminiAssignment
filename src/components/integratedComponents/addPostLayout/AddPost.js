import { useState } from 'react';
import './addPost.css';
import AddCommentForm from '../../unitComponents/addCommentForm/AddCommentForm';

function AddPost() {

    return (
        <div className="addPost">
            <h1>Add Comments</h1>
            <AddCommentForm />
        </div>
    );
}

export default AddPost;