import React from 'react'
import './newhome.css'
import Sidebar from '../Components/Sidebar/Sidebar'
import MonthlyBudget from '../Components/Monthly_budget/MonthlyBudget'
import Expense from '../Components/Expense/Expense'
import PieChartComponent from '../Components/Graph/NewPieChart'
import History from '../Components/History/History'
import LineGraph from '../Components/Graph/LineGraph'
import CategoryCurrentAmountBarChart from '../Components/Graph/CategoryCurrentAmountBarChart'
import TransactionModal from '../Components/Transactions/TransactionModal'
import { useGlobalDataContext } from '../Contexts/DataContext';
import { Form } from 'react-router-dom'

const NewHome = () => {
    const { showModal, expense } = useGlobalDataContext()
    // if (expense.length === 0) {
    //     return <Form />
    // }
    return (
        <div className='newHomeContainer'>
            <div className="newSidebar">
                <Sidebar />
            </div>
            <div className="newHomeMainContainer">
                <div className="left">
                    <div className="diff">
                        <p className='Heading'>Expense Cards</p>
                        <MonthlyBudget />
                    </div>
                    <div className="one graphContainer">
                        <div className="bargraph">
                            <CategoryCurrentAmountBarChart />
                        </div>
                        <div className="linechart">
                            <LineGraph />
                        </div>
                    </div>
                    <History />
                </div>
                <div className="right">
                    <div className="two">
                        <Expense />
                    </div>
                    <div className="two">
                        <PieChartComponent />
                    </div>
                </div>
            </div>
            {showModal && (
                <div className='modal-overlay'>
                    <TransactionModal />
                </div>
            )}
        </div>
    )
}

export default NewHome


// {category,amount,currentamount}
// {category,amount,desc,time}
//! 1] category,amount vs time; 2] 