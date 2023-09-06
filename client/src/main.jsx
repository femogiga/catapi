import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CatProvider from './context/CatContext.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Information from './components/Information.jsx'

import TopTen from './components/TopTen.jsx'



const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:id" element={<Information />} />
        <Route path="/mostsearched" element={<TopTen />} />
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
