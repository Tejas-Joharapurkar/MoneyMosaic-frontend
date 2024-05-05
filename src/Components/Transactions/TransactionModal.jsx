import React, { useMemo, useState } from 'react'
import axios from 'axios';
import { useGlobalDataContext } from '../../Contexts/DataContext'
import { useGlobalUserContext } from '../../Contexts/UserContext';
import { MdClose } from "react-icons/md";
import Loading from '../Loading';
import './modal.css'
const TransactionModal = () => {
    const url = 'http://localhost:8000/api/v1/expense/add/'
    // https://moneymosaic-backend.onrender.com/api/v1/expense/add/
    const { user } = useGlobalUserContext()
    const { loading, expense, toggle, msg, dispatch, month } = useGlobalDataContext()
    const [category, setCategory] = useState(expense[0])
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState(0);
    const balance = useMemo(() => {
        return category.currentamount - (amount ? amount : 0);
    }, [amount, category])
    const add_expenditure = async () => {
        console.log("transaction started");
        dispatch({ type: "FETCH_STARTED" })
        try {
            const data = { category: category.category, amount: parseInt(amount), desc }
            const response = await axios.patch(`${url}${user._id}/${month}`, data)
            console.log("transaction successful");
            console.log(response.data);
            dispatch({ type: "UPDATE_EXPENSE", payload: { data: response.data } })
        } catch (error) {
            console.log(error);
            dispatch({ type: "ERROR_FETCH", payload: error })
        }
    }
    // console.log(category);
    // if (loading) {
    //     return <Loading />;
    // }
    return (
        <div className="transactionContainer">
            <h2># Add Transaction</h2>
            <button className='close' onClick={toggle}>
                <MdClose />
            </button>
            <div className="form-modal-container">
                <div className="modal-fields">
                    <label htmlFor="category">Category</label>
                    <select id="category" onChange={(e) => setCategory(expense[e.target.value])}>
                        {
                            expense.map((single, index) => {
                                return (
                                    <option key={index} value={index}>{single.category}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="modal-fields">
                    <label htmlFor="desc">Description:</label>
                    <input id="desc" type='text' value={desc} onChange={(e) => setDesc(e.target.value)}></input>
                </div>
                <div className="modal-fields">
                    <label htmlFor="amount">Amount:</label>
                    <input type="number" value={amount} id='amount' onChange={(e) => setAmount(e.target.value)} />
                </div>
                <div className="modal-fields">
                    <p>Balance:</p>
                    <p>${balance}</p>
                </div>

                <button className='modal-fields button' onClick={add_expenditure}>Add</button>
            </div>
        </div>
    )
}

export default TransactionModal