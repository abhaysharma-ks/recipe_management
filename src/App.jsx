import React from 'react'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Recipe from './components/Recipe'
import Navbar from './components/Navbar'
import AddRecipe from './components/AddRecipe'
import Fav from './components/Fav'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe/:id" element={<Recipe />} />
      <Route path="/add" element={<AddRecipe />} />
      <Route path="/favourite" element={<Fav />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App