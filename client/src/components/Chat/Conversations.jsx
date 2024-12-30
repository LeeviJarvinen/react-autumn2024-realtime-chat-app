import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations'


const Conversations = () => {
    const {conversations, loading} = useGetConversations();
  return (
    <div className="space-y-4">
      <div className=' flex flex-col items-center p-3 rounded-lg cursor-pointer'>
        {conversations.map((conversation, index) => (
            <Conversation
            key={conversation._id}
            conversation={conversation}
            />
        ))} 
      </div>
      </div>
  )
}

export default Conversations