import React, { useEffect } from 'react'
import ChatMessages from './ChatMessages'
import ChatInput from './ChatInput'
import { setMessages, setSelectedConversation } from '../slices/messageSlice'
import { useDispatch, useSelector } from 'react-redux'

const ChatContainer = () => {
  const dispatch = useDispatch()
  const selectedConversation = useSelector((state) => state.conversation.selectedConversation)

  useEffect (() => {
    return () => { 
      dispatch(setSelectedConversation(null))}

  }, [dispatch])

  console.log(selectedConversation)

  if (!selectedConversation) {
    return (
      <div className='rounded-xl w-full h-[calc(100vh-110px)] flex flex-col min-w-[32rem] bg-primary-content/40 backdrop-blur-xl'>
        <>
          <div className='bg-primary p-2 rounded-t-xl'>
            <span className='text-primary-content font-semibold'></span>
          </div>
          <div className='flex justify-center items-center h-full'>
            <h5 className='text-2xl'>Select a chat to begin</h5>
          </div>
          <ChatInput/>
        </>
      </div>
    );
}

  return (
    <div className='rounded-xl w-full h-[calc(100vh-110px)] flex flex-col min-w-[32rem] bg-primary-content/40 backdrop-blur-xl'>
        <>
        <div className='bg-primary p-2 rounded-t-xl'>
            <span className='text-primary-content text-xl font-semibold'>{selectedConversation.username}</span>
        </div>
        <ChatMessages
        conversations = {selectedConversation}
        />
        <ChatInput/>
        </>
    </div>
  )
}

export default ChatContainer