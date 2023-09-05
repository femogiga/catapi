import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CatProvider from './context/CatContext.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Stats from './components/reusablecomponent/Stats.jsx'
import Information from './components/Information.jsx'



const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:id" element={<Information />} />
      </Routes>
    </BrowserRouter>
  )
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CatProvider>
      <Root />
    </CatProvider>

  </React.StrictMode>,
)
