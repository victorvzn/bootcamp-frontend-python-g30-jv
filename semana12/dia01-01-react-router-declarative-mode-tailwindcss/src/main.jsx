import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter, Route, Routes } from 'react-router'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<h1>HOME PAGE</h1>} />
      <Route path='/prueba' element={<h1>PRUEBA PAGE</h1>} />
    </Routes>
  </BrowserRouter>
)
