import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavLinks.css'



const NavLinks = () => {

  return (
    <ul className="nav-links">
      <li>
        <NavLink exact to="/users">ALL USERS</NavLink>
      </li>
      <li>
        <NavLink to="/signup">SIGN UP</NavLink>
      </li>
      <li>
        <NavLink to="/login">LOG IN</NavLink>
      </li>
    </ul>
  )
}

export default NavLinks
