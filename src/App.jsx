import React from 'react'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Recipe from './components/Recipe'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe/:id" element={<Recipe />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App