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