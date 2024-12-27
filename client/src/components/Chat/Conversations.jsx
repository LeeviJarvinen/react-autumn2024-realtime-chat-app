import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations'


const Conversations = () => {
    const {conversations, loading} = useGetConversations();
  return (
    <div className="space-y-4">
      <div className='max-w-72 flex flex-col items-center p-3 rounded-lg cursor-pointer'>
        {conversations.map((conversation, index) => (
            <Conversation
            key={conversation._id}
            conversation={conversation}
            />
        ))} 
          {/* <div className="relative">
              <img src="/api/placeholder/40/40" className="w-10 h-10 rounded-full" />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
          </div>
          <div className="ml-3 flex-1">
              <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-gray-900">Sarah Wilson</h3>
                  <span className="text-xs text-gray-500">2m ago</span>
              </div>
              <p className="text-sm text-gray-500 truncate">Hey, how's your project going?</p>
          </div> */}
      </div>
      </div>
  )
}

export default Conversations