import React, { useState } from 'react'
import usePostMessage from '../hooks/usePostMessage'

const ChatInput = () => {
  const [message, setMessage] = useState('')
  const { sendMessage, loading } = usePostMessage()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await sendMessage(message)
  }

  const Sending = loading ? 'Sending...' : 'Send';

  return (
    <div className='p-5 flex flex-row gap-2 w-full justify-center'>
        <input 
        type="text" 
        placeholder="Type here" 
        className="input"
        value={message}
        onChange={e => setMessage(e.target.value)}
        />
        <button className="btn btn-accent w-32" onClick={handleSubmit}>{Sending}</button>
    </div>
  )
}

export default ChatInput