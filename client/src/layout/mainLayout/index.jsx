import React from 'react'
import './index.scss'
import Navbar from '../navbar'
import Footer from '../footer'
import { Outlet } from 'react-router-dom'
function MainLayout() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default MainLayout