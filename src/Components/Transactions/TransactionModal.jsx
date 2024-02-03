import React, { useState } from 'react'
import axios from 'axios';
import { useGlobalDataContext } from '../../Contexts/DataContext'
import { useGlobalUserContext } from '../../Contexts/UserContext';
import { MdClose } from "react-icons/md";
import Loading from '../Loading';
import './modal.css'
const TransactionModal = () => {
    const { user } = useGlobalUserContext()
    const { loading, expense, toggle, msg, dispatch, month } = useGlobalDataContext()
    const [category, setCategory] = useState(expense[0].category)
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState(0);
    const add_expenditure = async () => {
        console.log("transaction started");
        dispatch({ type: "FETCH_STARTED" })
        try {
            const date = new Date().getTime()
            const data = { category, amount, desc, date }
            const response = await axios.patch(`http://localhost:5000/api/v1/expense/add/${user._id}/${month}`, data)
            console.log("transaction successful");
            dispatch({ type: "UPDATE_EXPENSE", payload: { category, amount, desc, date, msg: "successfully created expense" } })
            console.log(response.data);
        } catch (error) {
            console.log(error);
            dispatch({ type: "ERROR_FETCH", payload: error })
        }
    }
    if (loading) {
        return <Loading />;
    }
    return (
        <div className='modal-container'>
            <button onClick={toggle} style={{ position: "relative", left: '95%' }}><MdClose /></button>
            {msg && <h1>{msg}</h1>}
            <div className="form-modal-container">
                <div className="modal-fields">
                    <label htmlFor="category">Category</label>
                    <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                        {
                            expense.map((single, index) => {
                                return (
                                    <option key={index} value={single.category}>{single.category}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="modal-fields">
                    <label htmlFor="desc">Description</label>
                    <textarea id="desc" cols="30" rows="10" value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>
                </div>
                <div className="modal-fields">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" value={amount} id='amount' onChange={(e) => setAmount(e.target.value)} />
                </div>
                <button className='modal-fields button' onClick={add_expenditure}>Add</button>
            </div>
        </div>
    )
}

export default TransactionModal