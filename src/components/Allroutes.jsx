import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'

const Allroutes = () => {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path="*"/>
  </Routes>
    </>
   
  )
}

export default Allroutes