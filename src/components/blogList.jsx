import React from 'react'
import BlogCard from './card'


const BlogList = ({ blogs }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {blogs.map(blog => <BlogCard key={blog.id} blog={blog} />)}
    </div>
  )
}

export default BlogList