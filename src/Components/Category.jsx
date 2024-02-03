import React, { useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import './category.css'
const Category = ({ single, index, list, setlist }) => {
    const [currentcategory, setcurrentcategory] = useState(single.category)
    const [currentamount, setcurrentamount] = useState(single.amount)
    const [edit, setedit] = useState(false)
    const Delete = (category) => {
        const newlist = list.filter((item) => item.category !== category)
        setlist([...newlist])
    }
    return (
        <div className="single-category" key={index}>
            <div className="info">
                <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', width: '100%', marginLeft: '0.5rem' }}>
                    <input type="text" id='category' value={currentcategory} readOnly={edit ? false : true} onChange={(e) => { setcurrentcategory(e.target.value) }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', width: '100%' }}>
                    <input type="number" id='amount' value={currentamount} readOnly={edit ? false : true} onChange={(e) => { setcurrentamount(e.target.value) }} />
                </div>
            </div>
            {edit ? <button>Done</button> :
                <div className="button-container">
                    <button onClick={() => Delete(currentcategory)}><MdDeleteForever style={{ color: 'red' }} /></button>
                    <button onClick={() => { setedit(true) }}><FaEdit style={{ color: 'cyan' }} /></button>
                </div>
            }
        </div>
    )
}

export default Category