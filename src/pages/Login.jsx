import React, { useState } from 'react';
import axios from 'axios';
import './login.css';
import { useNavigate } from 'react-router';
import { useGlobalUserContext } from '../Contexts/UserContext';
const Login = () => {
    const { error, dispatch } = useGlobalUserContext()
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({});
    const handleChange = (e) => {
        setCredentials((prev) => {
            return { ...prev, [e.target.id]: e.target.value };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" })
        try {
            const response = await axios.post("http://localhost:5000/api/v1/user/register", credentials);
            dispatch({ type: "LOGIN_SUCCESS", payload: response.data })
            navigate('/')
        } catch (error) {
            console.log((error));
            dispatch({ type: "LOGIN_FAILURE", payload: "error" })
            // Handle the error, e.g., display an error message to the user
        }
    };

    return (
        <div className="main-container">
            <form className="glass-container">
                <h3>Log in to monitor your financial data.</h3>
                <div className="input-container">
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="name" placeholder="Enter your username" onChange={(e) => handleChange(e)} />
                </div>

                <div className="input-container">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" placeholder="Enter your password" onChange={(e) => handleChange(e)} />
                </div>
                <button onClick={(e) => handleSubmit(e)}>Login/register</button>
            </form>
            {error && <h2>{error}</h2>}
        </div>
    );
};

export default Login;
