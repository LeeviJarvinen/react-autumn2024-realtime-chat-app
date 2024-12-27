import ChatMessage from './ChatMessage'
import useGetMessages from '../hooks/useGetMessages';
import { useEffect, useRef } from 'react';
import useListenMessages from '../hooks/useListenMessages';
import { } from '../slices/messageSlice'
import { useDispatch, useSelector } from 'react-redux'

const ChatMessages = () => {
  const selectedMessages = useSelector((state) => state.conversation.messages)
  const {messages, loading} = useGetMessages();
  const RecentMessageRef = useRef();
  const isEmpty = true
  useListenMessages()

  useEffect(() => {
    setTimeout(() => {
      RecentMessageRef.current?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  })

  console.log(RecentMessageRef)

  return (
    <div className='flex-grow overflow-y-auto px-4 mt-5'>
      {selectedMessages && selectedMessages.length > 0 ? 
      <>
            {messages.map((message) => (
              <div key={message._id} ref={RecentMessageRef}>
                <ChatMessage message={message}/>
              </div>
          ))}
      </>
       :
       <>
      <div className='flex flex-col items-center justify-center h-164 text-xl'>
          <span>No messages found.</span>
          <span>Be the first to start the conversation</span>
      </div>
      </>
       }

    </div>
  )
}

export default ChatMessages