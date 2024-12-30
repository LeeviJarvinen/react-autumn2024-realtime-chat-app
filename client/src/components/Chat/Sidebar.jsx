import React from 'react'
import Conversations from './Conversations';
import SidebarSearch from './SidebarSearch';
import SidebarHeader from './SidebarHeader';

const Sidebar = () => {
  return (
    <div className=" bg-white border-r">
        <div className="p-4">

          <SidebarHeader />
          <SidebarSearch />
          <Conversations />
        </div>
      </div>
  )
}

export default Sidebar