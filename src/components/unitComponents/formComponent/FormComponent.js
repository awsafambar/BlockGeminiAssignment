import React, { useState } from 'react'
import './formComponent.css'

function FormComponent() {


    const [nameValue, setName] = useState('');

    const [title, setTitle] = useState('')

    const [body, setBody] = useState('');

    const [userid, setUser] = useState('')

    const onSubmit = () => {

        let form = {
            userid,
            title,
            body
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                form
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                alert("New Post Added")
                console.log(json)
                setName('')
                setTitle('')
                setBody('')
                setUser('')
            })
            .catch(err => {
                alert("unfortuantely Error Encountered" + err)
            })
            ;




    }
    return (
        <div className="inputText">
            <div className="addPost">
                <h1>Add Comments</h1>
                <form className="form">
                    <label>UserID</label>
                    <input
                        type="text"
                        name="userid"
                        value={userid}
                        onChange={(event) => setUser(event.target.value)}
                    />
                    <label>Name</label>
                    <input
                        type="text"
                        name="Name"
                        value={nameValue}
                        onChange={(event) => setName(event.target.value)}
                    />
                    <div>
                        <label className=''>Title</label>
                        <input
                            type="text"
                            name="title"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                        />
                    </div>


                    <label>Comments</label>
                    <textarea
                        name="body"
                        value={body}
                        rows={12}
                        cols={80}
                        onChange={(event) => setBody(event.target.value)}
                    />
                    <button type="button" onClick={onSubmit} className="postComment">
                        Create Post
                    </button>
                </form>
            </div >

        </div>
    )
}

export default FormComponent;