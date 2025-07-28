import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import View from './View.jsx'
import Modify from './Modify.jsx'
import Enter from './Enter.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/view" element={<View />} />
        <Route path="/enter" element={<Enter />} />
        <Route path="/modify" element={<Modify />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
