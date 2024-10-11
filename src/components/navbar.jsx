import React from 'react'

const NavBar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow">
      <div className="flex items-center space-x-4">
        <div>Afterglow</div>
        <div className="text-gray-400">| Scenario Default</div>
      </div>
      <div className="flex items-center space-x-4">
        <input type="text" placeholder="Search" className="p-2 border rounded"/>
        <div className="flex items-center space-x-2">
          <img src="avatar-url" alt="User Avatar" className="w-8 h-8 rounded-full"/>
          <span>Robert Fox</span>
        </div>
      </div>
    </div>
  )
}

export default NavBar