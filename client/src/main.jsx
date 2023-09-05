import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CatProvider from './context/CatContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CatProvider>
      <App />
    </CatProvider>

  </React.StrictMode>,
)
