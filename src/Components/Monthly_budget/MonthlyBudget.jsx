// // MonthlyBudget.jsx
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React, { useState, useEffect } from 'react';
import { useGlobalDataContext } from '../../Contexts/DataContext';
import SingleCard from './SingleCard';
import './monthly.css';

// const colorPaletBar = ["#FCE38A", "#42c697", "#F5CD7A", "#556EE6", "#E66868", "#3EC1D3"]
let index = 0;
const neonColors = ['#FF5161', '#FF53cd', '#2dd9fe', '#9461fd', '#00fe9b', '#ffdb4e', '#fefefe'];
const glowColors = ['#D30302', '#e10361', '#00a3d5', '#4003e6', '#02c435', '#b48505', '#ffffff'];

const colorPaletPer = ["#F3A683", "EB8686", "#F7D794", "#778BEB", "#EB8686", "#64CDDB"]
const MonthlyBudget = () => {
    const { expense } = useGlobalDataContext();
    const [index, setIndex] = useState(0);
    const nextIndex = (index + 1) % expense.length;
    const prevIndex = (index + 2) % expense.length;
    return (
        <div className="cardSliderContainer">
            {
                expense.map((single, i) => {
                    return (
                        <div key={i} className={`slide ${i === index ? 'FSlide' : i === nextIndex ? 'SSlide' : i === prevIndex ? 'TSlide' : 'Nonactive'
                            }`}>
                            <h4 style={{ letterSpacing: '0.3rem', textTransform: 'capitalize', margin: '10px 0 5px 20px' }}>{single.category}</h4>
                            <h3 style={{ letterSpacing: '0.3rem', textTransform: 'capitalize', margin: '0 0 10px 20px' }}>{single.amount}</h3>
                            <p style={{ letterSpacing: '0.3rem', textTransform: 'capitalize', margin: '0 0 0 20px' }}>Remaning: {single.amount - single.currentamount}</p>
                            <p style={{ color: `${colorPaletPer[(i + colorPaletPer.length) % colorPaletPer.length]}`, letterSpacing: '0.1rem', textTransform: 'capitalize', margin: '0 0 0 20px' }}>{((single.amount - single.currentamount) / single.amount) * 100}%</p>
                            <div className="percentageBox" style={{ width: '90%', height: '5%', background: '#404040', position: 'absolute', left: '10px', borderRadius: '10px', bottom: '10%' }}>
                                <div className="completed" style={{ width: `${Math.min(((single.amount - single.currentamount) / single.amount) * 100, 100)}%`, height: "100%", background: `${neonColors[i]}`, borderRadius: '10px ', boxShadow: `0 0 25px 2.5px ${glowColors[i]}` }}>

                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <button onClick={() => setIndex(Math.max(0, index - 1))} className="leftButton rButton"><FaChevronLeft /></button>
            <button onClick={() => setIndex((index + 1) % expense.length)} className="rightButton rButton"><FaChevronRight /></button>
        </div>
    );
};

export default MonthlyBudget;


