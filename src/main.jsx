import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { UserProvider } from './Contexts/UserContext.jsx'
import { DataProvider } from './Contexts/DataContext.jsx'
import MonthlyBudget from './Components/Monthly_budget/MonthlyBudget.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <UserProvider>
    <DataProvider>
      <App />
    </DataProvider>
  </UserProvider>
  // </React.StrictMode>,
)
