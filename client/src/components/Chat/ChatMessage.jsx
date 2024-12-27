import React from 'react'
import { useSelector } from 'react-redux';

const ChatMessage = ({message}) => {
  const { userInfo } = useSelector((state) => state.auth)
  const sender = message.senderId === userInfo._id;
  const receiver = sender ? 'chat-sender' : 'chat-receiver';
  const str = message.updatedAt
  const formattedTime = str.slice(11,16)

  return (
    <div className={`chat ${receiver}`}>
      <div className="chat-header text-base-content/90">
      </div>
      <div className="chat-bubble">{message.message}</div>
      <div className='chat-footer text-base-content/50'>
        <time className='text-base-content/50'>{formattedTime}</time>
      </div>
      {/* <div className="chat-footer text-base-content/50">
        Seen
        <span className="icon-[tabler--checks] text-success align-bottom"></span>
    </div> */}
    </div>
  )
}

export default ChatMessage