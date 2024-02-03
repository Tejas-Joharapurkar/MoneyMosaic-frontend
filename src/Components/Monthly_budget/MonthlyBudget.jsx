// MonthlyBudget.jsx
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React, { useState, useEffect } from 'react';
import { useGlobalDataContext } from '../../Contexts/DataContext';
import SingleCard from './SingleCard';
import './monthly.css';

const MonthlyBudget = () => {
    const { expense } = useGlobalDataContext();
    const [index, setIndex] = useState(0);
    const nextIndex = (index + 1) % expense.length;
    const prevIndex = (index - 1 + expense.length) % expense.length;
    useEffect(() => {
        let slider = setInterval(() => {
            setIndex((index + 1) % expense.length);
        }, 5000);
        return () => {
            clearInterval(slider);
        };
    }, [index]);
    return (
        <div className="monthly-main-container">
            <h3 style={{ position: 'absolute', top: '10px' }}>Montly Expense Modal</h3>
            <div className="slider-container">
                {expense?.map((single, i) => {
                    return (
                        <div
                            key={i}
                            className={`slide ${i === index ? 'activeSlide' : i === nextIndex ? 'nextSlide' : i === prevIndex ? 'lastSlide' : 'Nonactive'
                                }`}
                        >
                            <SingleCard single={single} />
                        </div>
                    )
                })}
                {/* <button className="btn-left" onClick={() => setIndex(prevIndex)}>
                    <FaChevronLeft />
                </button>
                <button className="btn-right" onClick={() => setIndex(nextIndex)}>
                    <FaChevronRight />
                </button> */}
            </div>
        </div>
    );
};

export default MonthlyBudget;
