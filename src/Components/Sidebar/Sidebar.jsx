import React from 'react'
import './sidebar.css'
import { useGlobalUserContext } from '../../Contexts/UserContext'
import { useGlobalDataContext } from '../../Contexts/DataContext';
import { FaHome, FaSignOutAlt } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
const Sidebar = () => {
    const navigate = useNavigate()
    const { user, dispatch } = useGlobalUserContext()
    const { toggle } = useGlobalDataContext()
    const logout = () => {
        localStorage.removeItem("user")
        dispatch({ type: "LOGOUT" })
    }
    return (
        <div className='main-sidebar-container'>
            <div className="logo">
                <h2 className='logoHeading'>MMOSAIC</h2>
            </div>
            <div className="options">
                <h3>#Menu</h3>
                <button className='links' onClick={() => navigate('/newhome')}>
                    <FaHome />
                    Home
                </button>
                <button className='links' onClick={() => navigate('/dashboard')}>
                    <MdDashboardCustomize />
                    DashBoard
                </button>
                <button onClick={toggle} className='links'>Add Expense</button>
            </div>
            <div className="logout">
                <button onClick={logout} className='links'>
                    <FaSignOutAlt />
                    Logout
                </button>
            </div>
        </div>

    )
}

export default Sidebar