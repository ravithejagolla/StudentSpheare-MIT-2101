import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Product from '../Pages/Product'
import { Register } from '../Pages/Register'
import ProductDetails from '../Pages/ProductDetails'
import Blog from '../Pages/Blog'
import Contact from '../Pages/Contact'
import Profile from '../Pages/Profile'


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/products" element={<Product />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default AppRoutes