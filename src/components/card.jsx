import React from 'react'

const BlogCard = ({ blog }) => {
  return (
    <div className="p-4 bg-white rounded shadow-md">
      <img src={blog.image} alt={blog.title} className="h-32 w-full object-cover rounded"/>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{blog.title}</h3>
        <p className="text-gray-600">{blog.description}</p>
        <span className="text-sm text-gray-400">{blog.date}</span>
      </div>
    </div>
  )
}

export default BlogCard