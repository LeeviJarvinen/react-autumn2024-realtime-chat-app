import React from 'react'
import { Settings } from 'lucide-react';

const SidebarHeader = () => {
  return (
      <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-indigo-600">Conversations</h1>
          <Settings className="text-gray-500 w-5 h-5" />
  </div>
  )
}

export default SidebarHeader