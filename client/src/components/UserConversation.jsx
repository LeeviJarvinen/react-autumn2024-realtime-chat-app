import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedConversation } from '../slices/messageSlice';
import { Link } from 'react-router-dom';
import { useSocketContext } from '../context/SocketContext';

const UserConversation = ({conversation}) => {
  const dispatch = useDispatch()
  const selectedConversation = useSelector((state) => state.conversation.selectedConversation)
  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext()
  const isOnline = onlineUsers.includes(conversation._id)
  
  return (
    <>
    <Link onClick={() => dispatch(setSelectedConversation(conversation))}>
    <div className={`dropdown-item btn h-16 hover:bg-primary/90 cursor-pointer mb-2 ${isSelected ? 'bg-primary' : 'bg-primary/50 border-0'}`} >
      <div className={`avatar ${isOnline ? 'online-bottom' : 'offline-bottom'}`}>
        <div className="w-10 rounded-full">
          <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" alt="avatar 1" />
        </div>
      </div>
      <div className="w-60">
        <h6 className="truncate text-base-100 font-semibold">{conversation.username}</h6>
        <small className="text-base-200 truncate">Accepted your connection</small>
      </div>
    </div>
    </Link>
    </>
  )
}

export default UserConversation