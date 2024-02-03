import React from 'react'
import MonthlyBudgetChart from './MonthlyBudgetChart'
import ExpensesPieChart from './ExpensesPieChart'
import './graph.css'
import BudgetVsExpensesLineChart from './BudgetVsExpensesLineChart'
// import CategoryCurrentAmountBarChart from './CategoryCurrentAmountBarChart'

const Graph = () => {
    return (
        <div style={{ width: '100%', height: '100%', display: 'grid', placeContent: 'center' }}>
            {/* <ExpensesPieChart /> */}
            {/* <CategoryCurrentAmountBarChart /> */}
            {/* <MonthlyBudgetChart /> */}
            <BudgetVsExpensesLineChart />
        </div>
    )
}

export default Graph