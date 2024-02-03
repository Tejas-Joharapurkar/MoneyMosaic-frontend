import React from 'react'
import './expense.css'
import { useGlobalDataContext } from '../../Contexts/DataContext'
const Expense = () => {
    const { budget, currentbudget } = useGlobalDataContext()
    const percentageUsed = ((budget - currentbudget) / budget) * 100;
    return (
        <div className='expense-card'>
            <h3 style={{ textTransform: 'capitalize', letterSpacing: '0.2rem', color: '#FF0000' }}>Monthly Budget</h3>
            <div className="data-budget">
                <p>Budget: {budget}</p>
                <p>Used: {budget - currentbudget}</p>
                {/* <p>Remaning: {currentbudget}</p> */}
            </div>
            <div className="bar-budget-container">
                <div className="bar-background"></div>
                <div className="bar-spent"
                    style={{
                        width: `${percentageUsed}%`,
                    }}
                ></div>
            </div>
        </div>
    )
}

export default Expense