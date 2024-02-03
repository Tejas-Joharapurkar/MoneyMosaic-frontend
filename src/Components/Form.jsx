import React, { useState } from 'react'
import Category from './Category';
import Loading from './Loading';
import axios from 'axios';
import { useGlobalDataContext } from '../Contexts/DataContext'
import { useGlobalUserContext } from '../Contexts/UserContext'
import './form.css'
const Form = () => {
    const { dispatch, month, loading } = useGlobalDataContext()
    const { user } = useGlobalUserContext()
    const [budget, setbudget] = useState(0)
    const [category, setcategory] = useState("");
    const [amount, setamount] = useState(0);
    const [list, setlist] = useState([]);
    const create_expense_model = async () => {
        dispatch({ type: "FETCH_STARTED" })
        try {
            const data = { budget, month, "expenses": list, "currentbudget": budget };
            console.log(data);
            await axios.post(`http://localhost:5000/api/v1/expense/create/${user._id}`, data)
            dispatch({ type: "CREATE_EXPENSE_MODEL", payload: { budget, list } })
        } catch (error) {
            console.log("somthing went wrong in create_model_function");
            dispatch({ type: "ERROR_FETCH" })
        }
    }
    const handlesubmit = async (e) => {
        e.preventDefault();
        create_expense_model()
    }
    // console.log(expensedata);
    const addCategory = (category, amount) => {
        const newlist = [...list, { category, amount, "currentamount": amount }]
        setlist(newlist)
        setcategory("")
        setamount(0)
        // console.log(list);
    }
    if (loading) {
        return (
            <Loading />
        )
    }
    return (
        <div className='main-main'>
            <h1>Please Create Your Montly Expense Modal</h1>
            <div className='form-main-container'>
                <div className="form-container">
                    <div className="form">
                        <div className="input-field">
                            <label htmlFor="budget">Monthly Budget</label>
                            <input type="number" id='budget' value={budget} className="input" onChange={(e) => { setbudget(e.target.value) }} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="category">Add Category</label>
                            <input type="text" id='category' value={category} onChange={(e) => { setcategory(e.target.value) }} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="amount">Amount</label>
                            <input type="number" id="amount" value={amount} onChange={(e) => { setamount(e.target.value) }} />
                        </div>
                        <button onClick={() => { addCategory(category, amount) }} style={{ width: '50%', margin: 'auto', marginBottom: '0.5rem' }}>Add</button>
                        <button onClick={(e) => { handlesubmit(e) }}>Create Expense model</button>
                    </div>
                    <div className="list-container">
                        {
                            list.map((single, index) => {
                                return (
                                    <div key={index} className='single-list-category'>
                                        <Category single={single} index={index} list={list} setlist={setlist} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Form