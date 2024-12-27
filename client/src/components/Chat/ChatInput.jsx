import React, { useState } from 'react'
import { Send } from 'lucide-react'
import usePostMessage from '../../hooks/usePostMessage'

const ChatInput = () => {
  const [message, setMessage] = useState('')
  const { sendMessage, loading } = usePostMessage()
  const sending = loading ? 'text-indigo-300' : 'text-white';

  const handleSubmit = async (e) => {
    e.preventDefault()
    await sendMessage(message)
    setMessage('')
  }

  return (
    <div className="p-4 border-t bg-gray-100">
    <div className="flex items-center bg-gray-50 rounded-lg p-2 border-2 transition border-gray-300 hover:border-indigo-600">
      <input
        type="text"
        placeholder="Type Link message..."
        className="flex-1 bg-transparent outline-none px-2 "
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="p-2 rounded-lg bg-indigo-600 text-white" onClick={handleSubmit}>
        <Send className={`${sending} w-4 h-4 transition`} />
      </button>
    </div>
  </div>
  )
}

export default ChatInput