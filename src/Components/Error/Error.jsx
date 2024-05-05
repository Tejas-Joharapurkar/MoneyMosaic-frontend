import React from 'react'
import './error.css'
const Error = ({ msg }) => {
    return (
        <div className='errorContainer'>{msg}</div>
    )
}

export default Error