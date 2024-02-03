import React, { useEffect } from 'react';
import Form from '../Components/Form';
import Sidebar from '../Components/Sidebar/Sidebar'
import Expense from '../Components/Expense/Expense'
import Graph from '../Components/Graph/Graph'
import MonthlyBudget from '../Components/Monthly_budget/MonthlyBudget'
import History from '../Components/History/History'
import Loading from '../Components/Loading';
import axios from 'axios';
import './home.css'
import { useGlobalDataContext } from '../Contexts/DataContext';
import { useGlobalUserContext } from '../Contexts/UserContext';
import TransactionModal from '../Components/Transactions/TransactionModal';

const Home = () => {
    const { user, dispatch: userdispatch } = useGlobalUserContext();
    const { expense, loading, showModal, toggle, month, dispatch } = useGlobalDataContext();
    useEffect(() => {
        dispatch({ type: "FETCH_STARTED" })
        const fetchdata = async () => {
            console.log("started");
            dispatch({ type: "FETCH_STARTED" })
            try {
                const response = await axios.get(`http://localhost:5000/api/v1/expense/get/${user._id}/${month}`)
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
        fetchdata()
    }, [dispatch, user, userdispatch])
    return (
        <div className='home-container'>
            {loading ? (
                <Loading />
            ) : !user ? (
                <h1>Please log in</h1>
            ) : !expense.length ? (
                <Form />
            ) : (
                <div className='main-home-container'>
                    <div className="sidebar">
                        <Sidebar />
                    </div>
                    <div className="data-container">
                        <div className="top">
                            <div className="home-expense-container">
                                <Expense />
                            </div>
                            <div className="single-data-container">
                                <MonthlyBudget />
                            </div>
                        </div>
                        <div className="bottom">
                            <div className="single-data-container" style={{ textAlign: 'center' }}>
                                <h2>CategoryCurrentAmountBarChart</h2>
                                <Graph />
                            </div>
                            <div className="history-data-container" style={{ overflow: 'auto', width: '100%', height: '100%' }}>
                                <History />
                            </div>
                        </div>
                    </div>
                    {showModal && (
                        <div className='modal-overlay'>
                            <div className='button'>
                                <button onClick={toggle}>close</button>
                            </div>
                            <TransactionModal />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Home;
