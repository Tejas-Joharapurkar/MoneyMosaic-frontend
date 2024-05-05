import React, { useState, useEffect, useMemo } from 'react'
import Category from './Category';
import Loading from './Loading';
import axios from 'axios';
import { useGlobalDataContext } from '../Contexts/DataContext'
import { useGlobalUserContext } from '../Contexts/UserContext'
import Error from './Error/Error';
import { useNavigate } from 'react-router-dom'
import './form.css'
const Form = () => {
    const navigate = useNavigate()
    const url = 'http://localhost:8000/api/v1/expense/create/'
    // const url = "https://moneymosaic-backend.onrender.com/api/v1/expense/create/"
    const { dispatch, month, loading } = useGlobalDataContext()
    const { user } = useGlobalUserContext()
    const [budget, setbudget] = useState(0)
    const [error, setError] = useState(false)
    const [tempBudget, setTempBudget] = useState(0)
    const [category, setcategory] = useState("");
    const [amount, setamount] = useState(0);
    const [list, setlist] = useState([]);
    const [msg, setMsg] = useState("")

    const create_expense_model = async () => {
        dispatch({ type: "FETCH_STARTED" })
        try {
            const data = { budget, month, "expenses": list, "currentbudget": budget };
            console.log(data);
            await axios.post(`${url}${user._id}`, data)
            dispatch({ type: "CREATE_EXPENSE_MODEL", payload: { budget, list } })
            navigate('/')

        } catch (error) {
            console.log("somthing went wrong in create_model_function");
            dispatch({ type: "ERROR_FETCH" })
        }
    }
    const handlesubmit = async (e) => {
        e.preventDefault();
        if (list.length <= 3) {
            setMsg("Number of category should be grater that 3")
            setError(true)
        } else {
            create_expense_model()
        }
    }
    // console.log(expensedata);
    const addCategory = (category, amount) => {
        if (tempBudget - amount < 0) {
            setMsg("Budget OverLoaded")
            setError(true)
        } else {
            setTempBudget(tempBudget - amount);
            console.log(tempBudget);
            const newlist = [...list, { category, amount, "currentamount": amount, _id: new Date().getTime().toString() }]
            setlist(newlist)
        }
        setcategory("")
        setamount(0)
    }
    if (error) {
        const timeout = setTimeout(() => {
            setError(false)
            return () => {
                clearTimeout(timeout)
            }
        }, 3000);
    }
    if (loading) {
        return (
            <Loading />
        )
    }
    return (
        <div className="formMainContainer">
            {error && <Error msg={msg} />}
            <div className="sideForm">
                <h3># Create Budget Modal</h3>
                <div className="form">
                    <div className="input-field">
                        <label htmlFor="budget">Monthly Budget:</label>
                        <input type="number" id='budget' value={budget} className="input" onChange={(e) => { setbudget(parseInt(e.target.value)), setTempBudget(parseInt(e.target.value)) }} onWheel={(e) => ((e.target).blur())} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="category">Add Category:</label>
                        <input type="text" id='category' value={category} onChange={(e) => { setcategory(e.target.value) }} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="amount">Amount:</label>
                        <input type="number" id="amount" value={amount} onChange={(e) => { setamount(parseInt(e.target.value)) }} onWheel={(e) => ((e.target).blur())} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="balance">Balance:</label>
                        <input type="number" id="balance" readOnly={true} value={tempBudget - amount} onWheel={(e) => ((e.target).blur())} />
                    </div>
                    <button className='addButton' onClick={() => { addCategory(category, amount) }} >Add Category</button>
                    <button className='createButton' onClick={(e) => { handlesubmit(e) }}>Create Expense model</button>
                </div>

            </div>
            <div className="categoryContainer">
                {
                    list.map((single, index) => {
                        return (
                            <Category single={single} list={list} key={single._id} setlist={setlist} tempBudget={tempBudget} setTempBudget={setTempBudget} />
                        )
                    })
                }
            </div>
        </div>

    )
}

export default Form