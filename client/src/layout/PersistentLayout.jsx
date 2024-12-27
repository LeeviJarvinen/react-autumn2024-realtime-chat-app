import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const PersistentLayout = () => {
  return (
    <>
      <Outlet />
    </>
    // <div className="flex flex-col h-screen overflow-hidden">
    //   {/* <Navbar /> */}
    //   <div className="flex-grow overflow-auto">
    //     <Outlet />
    //   </div>
    // </div>
  )
}

export default PersistentLayout