import React from 'react'
import './User.css'


const User = (props) => {

  return (
    <ul className="card">
      <li><span className="card-span">Name: </span>{props.user.name}</li>
      <li><span className="card-span">Username: </span> {props.user.username}</li>
      <li><span className="card-span">Email: </span>{props.user.email}</li>
    </ul>
  )
}

export default User