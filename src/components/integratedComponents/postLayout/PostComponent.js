import React, { useState } from 'react'
import useApiCall from '../../../apicallhook/useApiCall'
import DisplayDetails from '../../unitComponents/displayDetails/DisplayDetails'
import { Navigate } from "react-router-dom";
import './postComponent.css'
import Button from '../../unitComponents/buttons/Button';
import FormComponent from '../../unitComponents/formComponent/FormComponent';

import './postComponent.css'


function PostComponent() {

    const { data } = useApiCall('https://jsonplaceholder.typicode.com/posts')

    const [post, setPost] = useState(null);

    const handleClick = (id) => {
        console.log("handleClick", id)
        setPost(id)
        // navigate(newPath)
    }

    const deletePost = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
        })
            .then((res) => {
                alert("post Deleted " + id)
            })
            ;

    }


    return (
        <div className='postComponent'>

            <h1 className='title'>Welcome to Blog Page</h1>

            {/* <AddPost /> */}
            <FormComponent />
            {data?.map(ele => {
                console.log("data?.map", { data }, ele.id)
                return (
                    <div className="eachPost">
                        <div onClick={(e) => handleClick(ele.id)}>
                            {Object.keys(ele).map((key) => {
                                // console.log("data?.map", { key }, { ele })
                                return key === "postId" || key === "id" ?
                                    <> </> :
                                    <DisplayDetails data={ele[key]} label={key} />
                            })}
                        </div>
                        <Button label={'Delete Post'} onChange={() => deletePost(ele["id"])} />
                    </div>)
            })}
            {post && (
                <Navigate to={`/${post}`} replace={true} />
            )}
        </div>

    )
}

export default PostComponent