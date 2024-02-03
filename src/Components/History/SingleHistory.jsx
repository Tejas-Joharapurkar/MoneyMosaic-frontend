// SingleHistory.jsx
import React from 'react';
import './singlehistory.css';

const SingleHistory = ({ single }) => {
    const { amount, category, desc, date } = single;
    return (
        <div className='single-history'>
            <p className='amount'>{amount}</p>
            <p className='category'>{category}</p>
            <p className='desc'>{desc}</p>
            <p className='date'>{date}</p>
        </div>
    );
};

export default SingleHistory;
