import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedConversation } from '../../slices/messageSlice';
import { Link } from 'react-router-dom';
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({ conversation }) => {
    const dispatch = useDispatch()
    const selectedConversation = useSelector((state) => state.conversation.selectedConversation)
    // const isSelected = selectedConversation?._id === conversation._id;
    const { onlineUsers } = useSocketContext()
    const isOnline = onlineUsers.includes(conversation._id)

    return (
        <>
            <Link onClick={() => dispatch(setSelectedConversation(conversation))}>
                <div key={conversation._id} className={`w-72 flex items-center p-3 rounded-lg cursor-pointer ${conversation._id === 0 ? 'bg-indigo-50' : 'hover:bg-gray-200'}`}>
                    <div className="relative">
                        <div className={`avatar ${isOnline ? 'online-bottom' : 'offline-bottom'}`}>
                            <div className="w-10 rounded-full">
                                <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" alt="avatar 1" />
                            </div>
                        </div>
                    </div>
                    <div className="ml-3 flex-1">
                        <div className="flex justify-between items-start">
                            <h3 className="font-semibold text-gray-900">{conversation.username}</h3>
                            <span className="text-xs text-gray-500">xx ago</span>
                        </div>
                        <p className="text-sm text-gray-500 truncate">latest message here</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Conversation