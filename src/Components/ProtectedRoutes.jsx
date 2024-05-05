import React, { useEffect, useLayoutEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useGlobalUserContext } from '../Contexts/UserContext'
import { useGlobalDataContext } from '../Contexts/DataContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const ProtectedRoutes = () => {
    const navigate = useNavigate()
    const { user } = useGlobalUserContext()
    const url = 'http://localhost:8000/api/v1/expense/get/'
    const { month, dispatch, expense } = useGlobalDataContext();
    useLayoutEffect(() => {
        const fetchdata = async () => {
            console.log("started");
            dispatch({ type: "FETCH_STARTED" })
            try {
                const response = await axios.get(`${url}${user._id}/${month}`)
                const { expenses, budget, currentbudget, spendings } = response.data.expense
                const transaction = response.data.transaction
                console.log(response.data.expense.spendings);
                dispatch({ type: "INITIAL_LOAD", payload: { expenses, budget, currentbudget, transaction, spendings } })
                console.log("dispatched");
            } catch (error) {
                navigate('/form')
                console.log(error);
                dispatch({ type: "ERROR_FETCH" })
            }
        }
        if (user) {
            fetchdata()
        }
    }, [])
    // alert(`noraml ${expense.length}`)
    return (
        !user ? <Navigate to="/login" /> : <Outlet />
    )
}

export default ProtectedRoutes