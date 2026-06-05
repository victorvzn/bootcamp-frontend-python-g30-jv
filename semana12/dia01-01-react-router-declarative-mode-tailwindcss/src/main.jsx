import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage.jsx'
import PruebaPage from './pages/PruebaPage.jsx'
import ProductsPage from './pages/ProductsPage.jsx'

// TODO: Listar los personajes de la siguiente url https://rickandmortyapi.com/api/character

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/prueba' element={<PruebaPage />} />
      <Route path='/products' element={<ProductsPage />} />
    </Routes>
  </BrowserRouter>
)
