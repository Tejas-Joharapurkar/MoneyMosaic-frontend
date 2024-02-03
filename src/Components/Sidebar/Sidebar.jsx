import React, { useState } from 'react'
import './sidebar.css'
import { useGlobalUserContext } from '../../Contexts/UserContext'
import { useGlobalDataContext } from '../../Contexts/DataContext';
import { FaSignOutAlt } from "react-icons/fa";
const Sidebar = () => {
    const { user, dispatch } = useGlobalUserContext()
    const { toggle } = useGlobalDataContext()
    const logout = () => {
        localStorage.removeItem("user")
        dispatch({ type: "LOGOUT" })
    }
    return (
        <div className='main-sidebar-container'>
            <div className="name">
                <h3>{user.name}</h3>
            </div>
            <div className="sidebar-button-container">
                <button onClick={toggle}>Add </button>
                <button>Dash</button>
            </div>
            <div className="logout">
                <button>
                    <FaSignOutAlt onClick={() => logout()} />
                </button>
            </div>
        </div>

    )
}

export default Sidebar