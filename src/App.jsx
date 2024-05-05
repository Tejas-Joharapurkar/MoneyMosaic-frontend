import React, { useEffect } from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ProtectedRoutes from './Components/ProtectedRoutes';
import NewHome from './pages/NewHome';
import { DataProvider } from './Contexts/DataContext';
import Form from './Components/Form';
import FormProtectedroute from './Components/FormProtectedroute';


const App = () => {

  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            {/* <Route element={<FormProtectedroute />}> */}
            <Route element={<NewHome />} path="/" exact />
            <Route element={<Dashboard />} path="/dashboard" />
            {/* </Route> */}
            <Route element={<Form />} path='/form' />
          </Route>
          <Route element={<Login />} path="/login" />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
};

export default App;
