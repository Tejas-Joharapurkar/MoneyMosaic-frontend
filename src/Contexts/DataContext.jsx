import React, { useContext, useState, useReducer, useEffect } from "react";
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const INITIAL_STATE = {
    expense: [],
    month: months[new Date().getMonth()],
    transaction_history: [],
    budget: null,
    currentbudget: null,
    loading: false,
    showModal: false,
    msg: '',
}

const DataContext = React.createContext(INITIAL_STATE)
const DataReducer = (state, action) => {
    if (action.type === "FETCH_STARTED") {
        return { ...state, loading: true }
    }
    if (action.type === "ERROR_FETCH") {
        return { ...state, loading: false, expense: [], transaction_history: [] }
    }
    if (action.type === "INITIAL_LOAD") {
        return { ...state, expense: action.payload.expenses, budget: action.payload.budget, currentbudget: action.payload.currentbudget, transaction_history: action.payload.transaction, loading: false }
    }
    if (action.type === "CREATE_EXPENSE_MODEL") {
        return { ...state, expense: action.payload.list, budget: action.payload.budget, currentbudget: action.payload.budget, loading: false }
    }
    if (action.type === "UPDATE_EXPENSE") {
        const { category, amount, date, desc } = action.payload
        const updated_expense = state.expense.map((total) => {
            if (total.category === action.payload.category) {
                return { ...total, currentamount: total.currentamount -= action.payload.amount }
            } else {
                return { ...total }
            }
        })
        const updated_history = [...state.transaction_history, { category, amount, date, desc }]
        return { ...state, transaction_history: updated_history, expense: updated_expense, currentbudget: state.currentbudget - action.payload.amount, loading: false, msg: action.payload.msg }
    }
    if (action.type === "TOGGLE_MODAL") {
        return { ...state, showModal: !state.showModal }
    }
}

const DataProvider = ({ children }) => {
    const [state, dispatch] = useReducer(DataReducer, INITIAL_STATE)
    const toggle = () => {
        dispatch({ type: "TOGGLE_MODAL" })
    }
    // console.log(state.transaction_history);
    return <DataContext.Provider
        value={{
            expense: state.expense,
            transaction_history: state.transaction_history,
            budget: state.budget,
            currentbudget: state.currentbudget,
            loading: state.loading,
            month: state.month,
            showModal: state.showModal,
            meg: state.msg,
            toggle,
            dispatch
        }}>
        {children}
    </DataContext.Provider>
}

export const useGlobalDataContext = () => {
    return useContext(DataContext)
}

export { DataProvider, DataContext }