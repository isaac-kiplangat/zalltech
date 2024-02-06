import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Layout = () => {
  return (
    <div className='grid gap-4'>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout