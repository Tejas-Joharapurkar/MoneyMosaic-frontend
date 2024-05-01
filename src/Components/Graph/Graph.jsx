import React from 'react'
import MonthlyBudgetChart from './MonthlyBudgetChart'
import ExpensesPieChart from './ExpensesPieChart'
import './graph.css'
import BudgetVsExpensesLineChart from './BudgetVsExpensesLineChart'
import CategoryCurrentAmountBarChart from './CategoryCurrentAmountBarChart'

const Graph = () => {
    return (
        <div className='graph-container '>
            {/* <ExpensesPieChart /> */}
            <h2>CategoryCurrentAmountBarChart</h2>
            <CategoryCurrentAmountBarChart />
            {/* <MonthlyBudgetChart /> */}
            {/* <BudgetVsExpensesLineChart /> */}
        </div>
    )
}

export default Graph