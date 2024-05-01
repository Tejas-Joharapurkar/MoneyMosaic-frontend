import React, { useLayoutEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useGlobalUserContext } from '../Contexts/UserContext'
import { useGlobalDataContext } from '../Contexts/DataContext'
import axios from 'axios'
const ProtectedRoutes = () => {
    const { user } = useGlobalUserContext()
    const url = 'http://localhost:8000/api/v1/expense/get/'
    const { month, dispatch } = useGlobalDataContext();
    useLayoutEffect(() => {
        const fetchdata = async () => {
            console.log("started");
            dispatch({ type: "FETCH_STARTED" })
            try {
                const response = await axios.get(`${url}${user._id}/${month}`)
                const { expenses, budget, currentbudget } = response.data.expense
                const transaction = response.data.transaction
                console.log(response.data);
                dispatch({ type: "INITIAL_LOAD", payload: { expenses, budget, currentbudget, transaction } })
                console.log("dispatched");
            } catch (error) {
                console.log(error);
                dispatch({ type: "ERROR_FETCH" })
            }
        }
        if (user) {
            fetchdata()
        }
    }, [])
    return (
        user ? <Outlet /> : <Navigate to="/login" />
    )
}

export default ProtectedRoutes