// SingleHistory.jsx
import React from 'react';
import { useGlobalDataContext } from '../../Contexts/DataContext';
import './singlehistory.css';

const SingleHistory = ({ single }) => {
    const { amount, category, desc, date } = single;
    const { month } = useGlobalDataContext()
    return (
        <div className='single-history'>
            <p className='category'>{category}</p>
            <p className='desc'>{desc}</p>
            <p className='amount'>{amount}</p>
            <p className='date'>{month} {date}</p>
        </div>
    );
};

export default SingleHistory;
