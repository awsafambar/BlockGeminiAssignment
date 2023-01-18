import React from 'react'
import './displayDetails.css'

function DisplayDetails({ label, data }) {
    return (
        <div class="displayDetails">
            <div className='labelHeader'>{label.toString().trim()}</div>
            <div className='data'>{data.toString().trim()}</div>
        </div>
    )
}

export default DisplayDetails