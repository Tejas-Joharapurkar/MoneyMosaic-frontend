import React from 'react'
import { useGlobalDataContext } from '../Contexts/DataContext'
const Testing = () => {
    const { transaction_history } = useGlobalDataContext()
    alert(transaction_history[0].amount)
    return (
        <div>Testing</div>
    )
}

export default Testing