import React, { useEffect } from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ProtectedRoutes from './Components/ProtectedRoutes';
import NewHome from './pages/NewHome';
import { DataProvider } from './Contexts/DataContext';
import Testing from './Components/Testing';
// import axios from 'axios';
// import { useGlobalUserContext } from './Contexts/UserContext';
// import MonthlyBudget from './Components/Monthly_budget/MonthlyBudget';
// import Form from './Components/Form';
// import Auth from './pages/Auth';

const App = () => {

  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route element={<Home />} path="/" exact />
            <Route element={<Dashboard />} path="/dashboard" />
            <Route element={<NewHome />} path="/newhome" />
            <Route element={<Testing />} path='/testingcontext' />
          </Route>
          <Route element={<Login />} path="/login" />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
};

export default App;
