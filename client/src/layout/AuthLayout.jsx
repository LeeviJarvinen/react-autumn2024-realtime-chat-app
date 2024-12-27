import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const AuthLayout = () => {
  return (
    <div className="flex flex-col min-h-[calc(100vh-68px)]">
      <main className='flex-grow flex items-center justify-center'>
        <Outlet/>
      </main>
      <footer className='flex items-center justify-center"'>
        <Footer/>
      </footer>
    </div>
  )
}

export default AuthLayout