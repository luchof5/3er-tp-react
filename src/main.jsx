import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './router/Router'
import { UserProvider } from './context/UserContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <Router />
    </UserProvider>
  </React.StrictMode>,
)
