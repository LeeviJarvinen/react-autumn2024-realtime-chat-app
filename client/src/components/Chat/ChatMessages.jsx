import React from 'react'
import ChatMessage from './ChatMessage'
import useGetMessages from '../../hooks/useGetMessages';
import { useEffect, useRef } from 'react';
import useListenMessages from '../../hooks/useListenMessages';
import { } from '../../slices/messageSlice'
import { useDispatch, useSelector } from 'react-redux'

const ChatMessages = () => {
    const selectedMessages = useSelector((state) => state.conversation.messages)
    const { messages, loading } = useGetMessages();
    const RecentMessageRef = useRef();
    const isEmpty = true
    useListenMessages()

    useEffect(() => {
        setTimeout(() => {
            RecentMessageRef.current?.scrollIntoView({ behavior: "smooth" })
        }, 100)
    })
    return (
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {selectedMessages && selectedMessages.length > 0 ?
                <>
                    {messages.map((message) => (
                        <div key={message._id} ref={RecentMessageRef}>
                            <ChatMessage message={message} />
                        </div>
                    ))}
                </>
                :
                <>
                    <div className='flex flex-col items-center justify-center h-full text-xl'>
                        <span>No messages found.</span>
                        <span>Be the first to start the conversation</span>
                    </div>
                </>
            }
        </div>
    )
}

export default ChatMessages

          {/* Received Message
          <div className="flex items-end">
            <img src="/api/placeholder/32/32" className="w-8 h-8 rounded-full" />
            <div className="ml-2 bg-white rounded-lg rounded-bl-none p-4 shadow-sm max-w-md">
              <p className="text-gray-800">Hey! How's everything going with the new design?</p>
              <span className="text-xs text-gray-500 mt-1 block">10:42 AM</span>
            </div>
          </div>

          Sent Message
          <div className="flex items-end justify-end">
            <div className="mr-2 bg-indigo-600 rounded-lg rounded-br-none p-4 shadow-sm max-w-md">
              <p className="text-white">It's coming along great! I'll send you the preview soon.</p>
              <span className="text-xs text-indigo-200 mt-1 block">10:45 AM</span>
            </div>
          </div>
        </div> */}