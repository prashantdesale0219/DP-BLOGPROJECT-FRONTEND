import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BlogList from '../pages/BlogList'
import BlogEditForm from '../pages/BlogEditForm'
import BlogDetails from '../pages/BlogDetails'
import BlogForm from '../pages/BlogForm'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/editPost/:id" element={<BlogEditForm />} />
        <Route path="/getSinglePostData/:id" element={<BlogDetails />} />
        <Route path="/addBlogPost" element={<BlogForm />} />

      </Routes>
    </div>
  )
}

export default AllRoutes
