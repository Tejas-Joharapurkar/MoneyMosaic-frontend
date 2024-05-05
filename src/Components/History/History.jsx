// History.jsx
import React from 'react';
import { useGlobalDataContext } from '../../Contexts/DataContext';
import './history.css';
import SingleHistory from './SingleHistory';
// const transaction_history = [
//     { amount: 50, category: 'Food', desc: 'Lunch at a restaurant', date: '2024-04-01' },
//     { amount: 30, category: 'Transportation', desc: 'Uber ride', date: '2024-04-02' },
//     { amount: 20, category: 'Shopping', desc: 'Groceries', date: '2024-04-03' },
//     { amount: 100, category: 'Entertainment', desc: 'Concert tickets', date: '2024-04-04' },
//     { amount: 80, category: 'Utilities', desc: 'Electricity bill', date: '2024-04-05' },
//     { amount: 40, category: 'Healthcare', desc: 'Medicine', date: '2024-04-06' },
//     { amount: 70, category: 'Travel', desc: 'Hotel booking', date: '2024-04-07' },
//     { amount: 60, category: 'Others', desc: 'Miscellaneous', date: '2024-04-08' }
// ];
const History = () => {
    const { transaction_history } = useGlobalDataContext();

    return (
        <div className="historyContainer">
            <h3># History container</h3>
            <div className="headings">
                <p>Category</p>
                <p>Description</p>
                <p>Amount</p>
                <p>Date</p>
            </div>
            <div className="historyDataContainer">
                {
                    transaction_history?.map((single, i) => {
                        return (
                            <SingleHistory single={single} key={i} />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default History;
