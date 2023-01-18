import React from 'react'
import useApiCall from '../../../apicallhook/useApiCall'
import DisplayPostCard from '../../unitComponents/displayCard/DisplayPostCard'
import { useParams } from "react-router-dom";
import ShowComments from '../commentLayout/ShowComments'


import './postDetailComponent.css'

function PostDetailComponent() {

    let { id } = useParams();

    console.log("params", { id })

    const { data } = useApiCall(`https://jsonplaceholder.typicode.com/posts/${id}`)

    // const detailData = Object.keys(data).map((ele, index) => <DisplayDetails label={ele.toString()} value={data[ele]} />)

    console.log("PostDetailComponent", data)
    return (
        <>
            <ul>
                <li><a href="/">HomePage</a></li>
            </ul>
            <div className='postDetailComponentHeader'><h1>Displaying Post {id}</h1></div>
            <div className='postDetailComponent'>
                <DisplayPostCard post={data} />
                <ShowComments id={id} />
            </div>
        </>
    )
}

export default PostDetailComponent