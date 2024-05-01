import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Auth = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/v1/check')
                if (response.data === 'authenticated') {
                    navigate('/home')
                } else {
                    navigate('/login')
                }
            } catch (error) {
                alert(error.message)
            }
        }

        fetch()
    }, [])
    return (
        <div>Auth</div>
    )
}

export default Auth