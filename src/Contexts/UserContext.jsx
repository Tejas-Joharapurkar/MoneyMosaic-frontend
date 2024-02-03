import React, { useContext, useState, useEffect, useReducer } from "react";

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    loading: false,
    error: null,
    alert: { show: false, msg: '', type: '' }
}

const UserContext = React.createContext(INITIAL_STATE)
const UserReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return { user: null, loading: true, error: null }
        case "LOGIN_SUCCESS":
            return { user: action.payload, loading: false, error: null }
        case "LOGIN_FAILURE":
            return { user: null, loading: false, error: action.payload }
        case "LOGOUT":
            return { user: null, loading: false, error: null }
        default:
            return state
    }
}

const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE)
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user))
    }, [state.user])
    return <UserContext.Provider value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        alert: state.alert,
        dispatch
    }
    }>
        {children}
    </UserContext.Provider>
}
export const useGlobalUserContext = () => {
    return useContext(UserContext)
}

export { UserContext, UserProvider }