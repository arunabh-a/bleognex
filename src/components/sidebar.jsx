import React from 'react'

const Sidebar = () => {
    return (
      <div className="w-64 bg-white h-screen shadow-md">
        <div className="p-4">
          <h2 className="text-lg font-semibold">Jadwa</h2>
        </div>
        <nav className="mt-4">
          <ul className="space-y-2">
            <li><a href="/dashboard" className="flex items-center space-x-2 text-gray-600"><span>🏠</span><span>Dashboard</span></a></li>
            <li><a href="/blogs" className="flex items-center space-x-2 text-gray-600"><span>📄</span><span>Blogs</span></a></li>
            <li><a href="/finances" className="flex items-center space-x-2 text-gray-600"><span>💰</span><span>Finances</span></a></li>
            <li><a href="/pitches" className="flex items-center space-x-2 text-gray-600"><span>📊</span><span>Pitches</span></a></li>
          </ul>
        </nav>
      </div>
    );
  };
  

export default Sidebar