import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
     <nav>
     <NavLink to='/'  activeClassName="active">BlogList</NavLink>
     <NavLink to='/addBlogPost'  activeClassName="active">Add Blog</NavLink>
     </nav>

    </div>
  )
}

export default Navbar
