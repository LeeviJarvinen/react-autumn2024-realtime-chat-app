import React, { useState } from 'react'
import { Send, Menu } from 'lucide-react';
import ChatMessages from './ChatMessages';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLogoutMutation } from '../../slices/usersApiSlice';
import { logout } from '../../slices/authSlice';
import { useSocketContext } from '../../context/SocketContext';
import ChatInput from './ChatInput';


const ChatContainer = () => {
    const [message, setMessage] = useState('');
    const selectedConversation = useSelector((state) => state.conversation.selectedConversation)
    const { userInfo } = useSelector((state) => state.auth)
    const [logoutMutation] = useLogoutMutation()
    const dispatch = useDispatch()
    const { onlineUsers } = useSocketContext()
    const isOnline = selectedConversation ? onlineUsers.includes(selectedConversation._id) : false
    
    const handleLogout = async (e) => {
      e.preventDefault()
      try {
        const res = await logoutMutation()
        dispatch(logout())
        dispatch(removeSelectedConversation())
        navigate(0, '/')
    } catch (err) {
        console.log(err?.data?.message || err.error)
      }
    }

  return (
    <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        
        <div className="h-16 border-b bg-white flex items-center justify-between px-6">
        {selectedConversation ?
          <div className="flex items-center">
            <div className='avatar'>
              <div className="w-10 rounded-full">
                <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" alt="avatar 1" />
              </div>
            </div>
            <div className="ml-3">
              <h2 className="font-semibold text-gray-900">{selectedConversation.username}</h2>
              <span className={`text-sm ${isOnline ? 'text-green-500' : 'text-gray-500'}`}>{isOnline ? 'Online' : 'Offline'}</span>
            </div>
          </div>
          :
          <div className="h-16 border-b bg-white flex items-center justify-between px-6">
            <div className="flex items-center">
            </div>
          </div>
          }
        <div class="dropdown relative inline-flex rtl:[--placement:bottom-end]">
          <button id="dropdown-header" type="button" class="dropdown-toggle btn btn-primary" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
            Dropdown
            <span class="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4"></span>
          </button>
          <ul class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-header">
            <li class="dropdown-header gap-2">
              <div class="avatar">
                <div class="w-10 rounded-full">
                  <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-2.png" alt="User Avatar" />
                </div>
              </div>
              <div>
                <h6 class="text-base-content/90 text-base font-semibold">{userInfo.username}</h6>
                <small class="text-base-content/50 text-sm font-normal">{userInfo.email}</small>
              </div>
            </li>
            <li><a class="dropdown-item" href="#">My Profile</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">FAQ</a></li>
            <li class="dropdown-footer gap-2">
              <button class="btn btn-error btn-soft btn-block" onClick={handleLogout}>Sign out</button>
            </li>
          </ul>
        </div>

        </div>
        {/* Messages */}
        <ChatMessages />

        {/* Message Input */}
        <ChatInput />
      </div>
  )
}

export default ChatContainer