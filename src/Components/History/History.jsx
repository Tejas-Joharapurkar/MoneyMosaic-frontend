// History.jsx
import React from 'react';
import { useGlobalDataContext } from '../../Contexts/DataContext';
import './history.css';
import SingleHistory from './SingleHistory';

const History = () => {
    const { transaction_history } = useGlobalDataContext();

    return (
        <div className='main-transaction-container'>
            <h1>Transaction History</h1>
            <div className='history-container'>
                {transaction_history?.map((single, i) => (
                    <SingleHistory key={i} single={single} />
                ))}
            </div>
        </div>
    );
};

export default History;
