import React from 'react'
import Navbar from './NavBar'
import Footer from './Footer'
import { Outlet, useNavigation } from 'react-router'
import LoadingPage from '../../pages/LoadingPage'

const AppLayout = () => {

const naviagtion=useNavigation();
// console.log(naviagtion);
if (naviagtion.state==="loading") return <LoadingPage></LoadingPage>
  return (
    <div>
      <Navbar/>
      <Outlet></Outlet>
      <Footer/>
      
    </div>
  )
}

export default AppLayout
