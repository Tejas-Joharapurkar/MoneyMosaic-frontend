import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useGlobalUserContext } from '../Contexts/UserContext'
import { useGlobalDataContext } from '../Contexts/DataContext'
import axios from 'axios'
const FormProtectedroute = () => {
    const { user } = useGlobalUserContext()
    const url = 'http://localhost:8000/api/v1/expense/get/'
    const { month } = useGlobalDataContext();
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchdata = async () => {
            console.log("started");
            try {
                const response = await axios.get(`${url}${user._id}/${month}`)
                const { expenses, budget, currentbudget } = response.data.expense
                setData(expenses)
            } catch (error) {
                console.log(error);
            }
        }
        if (user) {
            fetchdata()
        }
    }, [])
    alert(`form ${data.length}`)
    return (
        data.length > 0 ? <Outlet /> : <Navigate to='/form' />
    )
}

export default FormProtectedroute