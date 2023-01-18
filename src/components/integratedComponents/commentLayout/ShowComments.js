import React, { useEffect, useState } from 'react'
import useApiCall from '../../../apicallhook/useApiCall'
import DisplayDetails from '../../unitComponents/displayDetails/DisplayDetails'
import AddPost from '../addPostLayout/AddPost'

import './showComments.css'

function ShowComments({ id }) {

    const { data } = useApiCall(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)

    return (
        <div className='showComments'>
            {data?.map(ele => {
                console.log("data?.map", { data }, ele)
                return (<div className="eachComment">
                    {Object.keys(ele).map((key) => {
                        console.log("data?.map", { key }, { ele })
                        return key === "postId" || key === "id" ?
                            <> </> :
                            <DisplayDetails data={ele[key]} label={key} />
                    })}
                    -----------------------------------------------------------------------------------------------------
                </div>)
            })}
        </div>
    )
}

export default ShowComments