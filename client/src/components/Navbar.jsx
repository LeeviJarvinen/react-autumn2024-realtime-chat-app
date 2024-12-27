import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useLogoutMutation } from '../slices/usersApiSlice'
import { logout } from '../slices/authSlice'
import { removeSelectedConversation } from '../slices/messageSlice'
import useGetConversations from '../hooks/useGetConversations'
import { MessagesSquare } from 'lucide-react';


const Navbar = () => {

  const { userInfo } = useSelector((state) => state.auth)
  const { selectedConversation, messages } = useSelector((state) => state.conversation)
  const {conversations, loading} = useGetConversations();
  const [logoutMutation] = useLogoutMutation()
  const dispatch = useDispatch()

  
  const handleLogout = async (e) => {
    e.preventDefault()
    try {
      const res = await logoutMutation()
      dispatch(logout())
      dispatch(removeSelectedConversation())
      navigate(0, '/register')
  } catch (err) {
      console.log(err?.data?.message || err.error)
    }
  }

  return (
  <nav className="navbar bg-gradient-to-r bg-indigo-600 px-48 border-b-4">
    <div className="flex flex-1 items-center">
      <Link className="link text-primary-content link-neutral text-2xl font-semibold no-underline flex items-center gap-1" to="/">
       CHATTY <MessagesSquare strokeWidth={2.5}/>
      </Link>
    </div>
    <div className='navbar-start pl-20'>
      <ul className='flex gap-20 font-semibold'>
          <li>
            <Link className="text-primary-content link link-neutral no-underline" to="/">Home</Link>
          </li>
          <li>
            <Link className="text-primary-content link link-neutral no-underline" to="/about">About</Link>
          </li>
          <li>
            <Link className="text-primary-content link link-neutral no-underline" to="/faq">FAQ</Link>
          </li>
        </ul>
    </div>
    <div className="navbar-end flex items-center gap-4">
      {userInfo 
      ?
      <>
      <div className='navbar-end'>
        <ul className='flex gap-20'>
          <li>
            <Link className="btn font-semibold" to="/chat">Contacts</Link>
          </li>
        </ul>
      </div>
      <div className="dropdown relative inline-flex [--auto-close:inside] [--offset:8] [--placement:bottom-end]">
        <button id="dropdown-scrollable" type="button" className="dropdown-toggle btn btn-text btn-circle dropdown-open:bg-base-content/10 size-10" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
          <div className="indicator">
            <span className="indicator-item bg-error size-2 rounded-full"></span>
            <span className="icon-[tabler--bell] text-base-content size-[1.375rem] bg-white"></span>
          </div>
        </button>
        <div className="dropdown-menu dropdown-open:opacity-100 hidden" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-scrollable">
          <div className="dropdown-header justify-center">
            <h6 className="text-base-content/90 text-base">Notifications</h6>
          </div>
          <div className="vertical-scrollbar horizontal-scroll rounded-scrollbar text-base-content/80 max-h-56 overflow-auto max-sm:max-w-60">
          {conversations.map((conversation, index) => (
            <div className="dropdown-item" key={conversation._id}>
              <div className="avatar away-bottom">
                <div className="w-10 rounded-full">
                  <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" alt="avatar 1" />
                </div>
              </div>
              <div className="w-60">
                <h6 className="truncate text-base">{conversation.username}</h6>
                <small className="text-base-content/50 truncate">Accepted your connection</small>
              </div>
            </div>
          ))}


          </div>
          <Link to="/chat" className="dropdown-footer justify-center gap-1" type="button">
            <span className="icon-[tabler--eye] size-4"></span>
            View all
          </Link>
        </div>
      </div>
      <div className="dropdown relative inline-flex [--auto-close:inside] [--offset:8] [--placement:bottom-end]">
        <button id="dropdown-scrollable" type="button" className="dropdown-toggle flex items-center" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
          <div className="avatar">
            <div className="size-9.5 rounded-full">
              <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" alt="avatar 1" />
            </div>
          </div>
        </button>
        <ul className="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-avatar">
          <li className="dropdown-header gap-2">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" alt="avatar" />
              </div>
            </div>
            <div>
              <h6 className="text-base-content/90 text-base font-semibold">{userInfo.username}</h6>
              <small className="text-base-content/50">{userInfo.email}</small>
            </div>
          </li>
          <li>
            <Link className="dropdown-item" to="#">
              <span className="icon-[tabler--user]"></span>
              My Profile
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="#">
              <span className="icon-[tabler--settings]"></span>
              Settings
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="#">
              <span className="icon-[tabler--receipt-rupee]"></span>
              Billing
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="#">
              <span className="icon-[tabler--help-triangle]"></span>
              FAQs
            </Link>
          </li>
          <li className="dropdown-footer gap-2">
            <button className="btn btn-error btn-soft btn-block" onClick={handleLogout}>
              <span className="icon-[tabler--logout]"></span>
              Sign out
            </button>
          </li>
        </ul>
      </div>
      </>
      :
      <>
        <Link className="btn btn-default" to="/login">Login</Link>
      </>
      }
    </div>
  </nav>
  )
}

export default Navbar