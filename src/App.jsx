import React, { useEffect } from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import axios from 'axios';
import Home from './pages/Home';
import { useGlobalUserContext } from './Contexts/UserContext';
import MonthlyBudget from './Components/Monthly_budget/MonthlyBudget';
// import { useGlobalDataContext } from './Contexts/DataContext';
const App = () => {
  const { user, loading } = useGlobalUserContext()
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              loading ? (
                <h1>Loading...</h1>
              ) : (
                <Home />
              )
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path='/test' element={<MonthlyBudget />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
