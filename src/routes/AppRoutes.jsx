import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../components/views/HomePage'
import Contact from '../components/views/Contact'


const AppRoutes = () => {
  return (
    <>
    <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </>
  )
}

export default AppRoutes