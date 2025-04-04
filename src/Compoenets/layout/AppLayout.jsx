import React from 'react'
import Navbar from './NavBar'
import Footer from './Footer'
import { Outlet } from 'react-router'

const AppLayout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet></Outlet>
      <Footer/>
      
    </div>
  )
}

export default AppLayout
