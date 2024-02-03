
import React from 'react';
import './singlecard.css';

const SingleCard = ({ single }) => {
    const { amount, currentamount, category } = single;
    const percentageUsed = ((amount - currentamount) / amount) * 100;
    return (
        <div className="singlecard-main-container">
            <div className="singlecard-display">
                <span style={{ color: '#80ffdb' }}>Category : </span>
                <span>{category}</span>
            </div>
            <div className="singlecard-display">
                <span style={{ color: '#80ffdb' }}>Amount : </span>
                <span>{amount}</span>
            </div>
            <div className="singlecard-display">
                <span style={{ color: '#80ffdb' }}>Used : </span>
                <span>{amount - currentamount}</span>
            </div>
            <div className="singlecard-display">
                <span style={{ color: '#80ffdb' }}>Remaning : </span>
                <span>{currentamount}</span>
            </div>
            <div className="bar-budget-container" style={{ background: '#9d4edd' }}>
                <div className="bar-background" style={{ background: '#e9ff70' }}></div>
                <div className="bar-spent"
                    style={{
                        width: `${percentageUsed}%`,
                        background: '#4cc9f0'
                    }}
                ></div>
            </div>
        </div>
    );
};

export default SingleCard;
