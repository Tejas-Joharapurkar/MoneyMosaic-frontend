import React, { useContext, useState, useReducer, useEffect } from "react";
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const INITIAL_STATE = {
    expense: [],
    transaction_history: [],
    spendings: [],
    month: months[new Date().getMonth()],
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
        return { ...state, expense: action.payload.expenses, budget: action.payload.budget, currentbudget: action.payload.currentbudget, transaction_history: (action.payload.transaction || []), loading: false, spendings: action.payload.spendings }
    }
    if (action.type === "CREATE_EXPENSE_MODEL") {
        return { ...state, expense: action.payload.list, budget: action.payload.budget, currentbudget: action.payload.budget, loading: false }
    }
    if (action.type === "UPDATE_EXPENSE") {
        const { current_expenses, transaction } = action.payload.data
        const { currentbudget, expenses, spendings } = current_expenses
        const { transactions } = transaction
        return { ...state, currentbudget, expense: expenses, spendings, transaction_history: transactions }
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
    console.log(state.expense);
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
            spendings: state.spendings,
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