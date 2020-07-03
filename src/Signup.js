import React, { useState } from 'react'


const Signup = () => {

  const [values, setValues] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const onChange = (event) => {
    setValues({...values, [event.target.name]: event.target.value})
  }

  return (
      <div>
        <form onSubmit={onSubmit}>
          <h1>Sign up</h1>
          <input
            name="name"
            type="text"
            label="Your name"
            placeholder="Name"
            value={values.name}
            onChange={onChange} />
          <input
            name="username"
            type="text"
            label="Your username"
            placeholder="Username"
            value={values.username}
              onChange={onChange} />
          <input
            name="email"
            type="email"
            label="Your email"
            placeholder="Email"
            value={values.email}
            onChange={onChange} />
          <input
            name="password"
            type="password"
            label="Your password"
            placeholder="Password"
            value={values.password}
            onChange={onChange} />
          <input
            name="confirmPassword"
            type="password"
            label="Confirm your password"
            placeholder="Confirm your password"
            value={values.confirmPassword}
            onChange={onChange} />
          <button type="submit">
            SIGN UP
          </button>
        </form>
      </div>

  )

}


export default Signup
