import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ChatLayout = () => {
  return (
    <div className="flex flex-col min-h-[calc(100vh-68px)] bg-banner-bg bg-cover bg-center">
      <main className='flex-grow flex items-start justify-center px-48'>
        <Outlet/>
      </main>
    </div>
  )
}

export default ChatLayout