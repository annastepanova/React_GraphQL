import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../context/Auth'
import './NavLinks.css'



const NavLinks = () => {

  const context = useContext(AuthContext)

  return (
    <ul className="nav-links">
      {context.user && (
        <li>
          <NavLink exact to="/users">ALL USERS</NavLink>
        </li>
      )}
      {!context.user && (
        <li>
          <NavLink to="/login">LOG IN</NavLink>
        </li>
      )}
      {!context.user && (
        <li>
          <NavLink to="/signup">SIGN UP</NavLink>
        </li>
      )}
      {context.user && (
        <li>
          <button onClick={context.logout} className="button-logout">LOG OUT</button>
        </li>
      )}
    </ul>
  )
}

export default NavLinks
