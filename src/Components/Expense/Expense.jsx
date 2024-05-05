import React, { useEffect, useState } from 'react'
import './expense.css'
import axios from 'axios'
import { useGlobalDataContext } from '../../Contexts/DataContext'
import { useGlobalUserContext } from '../../Contexts/UserContext'
const Expense = () => {
    const { budget, currentbudget } = useGlobalDataContext()
    const { user } = useGlobalUserContext()
    const percentageUsed = Math.max(((budget - currentbudget) / budget) * 100, 0).toFixed(0);
    const url = `https://avatar.iran.liara.run/public/boy`

    return (
        <div className="profileContainer">
            <h1># Profile</h1>
            <div className="topinfo">
                <div className="imgcontainer">
                    <img src={url} alt="" style={{ width: '90%', height: '90%' }} />
                </div>
                <div className="moneyinfo">
                    <h2 className='neonText'>{user.username}</h2>
                    {/* <p>Balance : $100000</p>
                    <p>Spend : $14000</p>
                    <div className="" style={{ width: '90%', height: '10%', background: '#404040', position: 'absolute', left: '0', borderRadius: '10px', bottom: '-15%' }}>
                        <div className="" style={{ width: `${percentageUsed}%`, height: "100%", background: "#00fe9b", borderRadius: '10px ', boxShadow: '0 0 25px 2.5px #02c435' }}>

                        </div>
                    </div> */}
                </div>
            </div>
            <div className="bottominfo">
                <p className='totalMoney'>Montly Budget : {budget}</p>
                <p className='totalMoney'>Used : {budget - currentbudget}</p>
                <p className='percentage'>{percentageUsed}%</p>
                <div className="" style={{ width: '90%', height: '3%', background: '#404040', position: 'absolute', left: '10px', borderRadius: '10px', bottom: '5%' }}>
                    <div className="" style={{ width: `${percentageUsed}%`, height: "100%", background: "#2dd9fe", borderRadius: '10px', boxShadow: '0 0 25px 2.5px #00a3d5' }}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Expense