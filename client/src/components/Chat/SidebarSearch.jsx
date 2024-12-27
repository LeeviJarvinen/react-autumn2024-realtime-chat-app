import React from 'react'
import { Search } from 'lucide-react';

const SidebarSearch = () => {
  return (
      <div className="relative mb-6">
          <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
          <input
              type="text"
              placeholder="Search conversations"
              className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
      </div>
  )
}

export default SidebarSearch