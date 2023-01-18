import React, { useState } from 'react'
import './addCommentForm.css';

function AddCommentForm({ postId }) {
    const [id, setId] = useState('');

    const [title, setTitle] = useState('')

    const [body, setBody] = useState('');

    const [userId, setUser] = useState('')


    const onSubmit = () => {

        let comment = {
            id: userId,
            userId,
            title,
            body
        }

        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: 'PUT',
            body: JSON.stringify(comment),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                alert("comment : " + body + " is added for post id :" + postId)
                console.log(json)
                setTitle('')
                setBody('')
                setUser('')
            });


    }
    return (
        <div className="inputText">
            <div className="addPost">
                <h1>Add Comments</h1>
                <form className="Form">
                    <label>UserID</label>
                    <input
                        type="text"
                        name="userid"
                        value={userId}
                        onChange={(event) => setUser(event.target.value)}
                    />
                    {/* <label>ID</label>
                    <input
                        type="text"
                        name="id"
                        value={id}
                        onChange={(event) => setId(event.target.value)}
                    /> */}
                    <label>Title</label>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />

                    <label>Comments</label>
                    <textarea
                        name="body"
                        value={body}
                        rows={12}
                        cols={64}
                        onChange={(event) => setBody(event.target.value)}
                    />
                    <button type="button" onClick={onSubmit} className="postComment">
                        Add Comment
                    </button>
                </form>
            </div >

        </div>
    )
}

export default AddCommentForm