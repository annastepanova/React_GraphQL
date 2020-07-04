import React from 'react'
import './User.css'


const User = (props) => {

  return (
    <ul className="card">
      <li>{props.user.name}</li>
      <li>{props.user.username}</li>
      <li>{props.user.email}</li>
    </ul>
  )
}

export default User