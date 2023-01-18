import React from 'react'

import AddCommentForm from '../addCommentForm/AddCommentForm';

import './displayPostCard.css';


function DisplayPostCard({ post }) {

    console.log("DisplayPostCard", { post })
    return (
        <div className='displayPostCard'>
            {post && Object.keys(post).map((key) => {
                return key === "id" || key === "userId" ?
                    <></> :
                    <div className="post">
                        <div className='label'>{key.toString().trim()}</div>
                        <div className='data'>{post[key].toString().trim()}</div>
                    </div>
            })}
            {/* <AddPost /> */}
            <AddCommentForm postId={post?.id} />
        </div>
    )
}

export default DisplayPostCard