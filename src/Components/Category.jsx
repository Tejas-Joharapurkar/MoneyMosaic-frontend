import React, { useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import './category.css'
const Category = ({ single, list, setlist, setTempBudget, tempBudget }) => {
    const [currentcategory, setcurrentcategory] = useState(single.category)
    const [currentamount, setcurrentamount] = useState(single.amount)
    const [edit, setedit] = useState(false)
    const Delete = (id) => {
        // const newlist = list.filter((item) => item._id !== id)
        const newlist = list.filter((item) => {
            if (item._id === id) {
                setTempBudget(tempBudget + item.amount)
                return false;
            } else {
                return true;
            }
        })
        setlist([...newlist])
    }
    const editfunction = (id) => {
        setlist((pre) => {
            return pre.map((item) => {
                if (item._id === id) {
                    // setTempBudget(tempBudget + item.amount - currentamount)
                    return { ...item, category: currentcategory, amount: currentamount };
                } else {
                    return item;
                }
            });
        });
        setedit(false);
    };

    console.log(list);
    return (
        <div className="single-category">
            <div className="info">
                <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', width: '100%', marginLeft: '0.5rem' }}>
                    <input type="text" id='category' value={currentcategory} readOnly={edit ? false : true} onChange={(e) => { setcurrentcategory(e.target.value) }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', width: '100%' }}>
                    <input type="number" id='amount' value={single.amount} readOnly={true} />
                </div>
            </div>
            {edit ? <button onClick={() => editfunction(single._id)}>Done</button> :
                <div className="button-container">
                    <button onClick={() => Delete(single._id)}><MdDeleteForever style={{ color: 'red' }} /></button>
                    <button onClick={() => { setedit(true) }}><FaEdit style={{ color: 'cyan' }} /></button>
                </div>
            }
        </div>
    )
}

export default Category