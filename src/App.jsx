import { useState } from 'react'

import './App.css'
import Sidebar from './components/sidebar'
import NavBar from './components/navbar'
import BlogList from './components/blogList'

function App() {
    const blogs = [
        { id: 1, title: 'Company', description: 'Integer porta scelerisque...', date: '2 days ago', image: 'image-url-1' },
        { id: 2, title: 'Financial Plan', description: 'Non congue dolor...', date: 'February 28, 2021', image: 'image-url-2' },
        // More blog data...
    ];
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <NavBar />
        <div className="p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Blogs</h2>
            <div className="space-x-4">
              <button className="p-2 bg-blue-500 text-white rounded">Add New</button>
              <button className="p-2 bg-purple-500 text-white rounded">Preview</button>
            </div>
          </div>
          <BlogList blogs={blogs} />
        </div>
      </div>
    </div>
  )
}

export default App
