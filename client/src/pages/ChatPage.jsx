import React from 'react'
import SidebarComponent from '../components/Chat/Sidebar';
import ChatContainer from '../components/Chat/ChatContainer';

const ChatPage = () => {
    return (
    <div className="flex h-screen bg-gray-200">
      {/* Sidebar */}
      <SidebarComponent/>

      {/* Main Chat Area */}
      <ChatContainer/>
    </div>
  );
}

export default ChatPage