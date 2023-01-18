import React from 'react'

function Button({ label, onChange }) {
    return (
        <div><button onClick={onChange}>{label}</button></div>
    )
}

export default Button