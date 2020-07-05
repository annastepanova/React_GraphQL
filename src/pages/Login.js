import React, { useState, useContext } from 'react'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { AuthContext } from '../context/Auth'
import './Form.css'

// creating GraphQL mutation 

const LOG_IN = gql`
      mutation login(
        $username: String!
        $password: String!
        ) {
      login(
        username: $username
        password: $password
        ) {
        id
        name
        username
        email
        token
    }
  }  
  `

const Login = (props) => {
  const context = useContext(AuthContext)

  const [errors, setErrors] = useState({})

  const [values, setValues] = useState({
    username: '',
    password: ''
  })

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  // executing a mutation

  const [loginUser, { loading }] = useMutation(LOG_IN, {
    update(_, { data: { login: userData }}) {
      context.login(userData)
      props.history.push('/users')
    },
    onError(err) {
      console.log(err.graphQLErrors[0].extensions.exception.errors)
      setErrors(err.graphQLErrors[0].extensions.exception.errors)

    },
    variables: values
  }
  )

  const onSubmit = (event) => {
    event.preventDefault()
    loginUser()
  }


  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1 className="form-title">LOG IN</h1>
        <label for="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="some_guy"
          value={values.username}
          onChange={onChange} />
        <label for="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={values.password}
          onChange={onChange} />
        <button type="submit" className="form-button">
          LOG IN
          </button>
      </form>
      {Object.keys(errors).length > 0 && (
        <div className="error-message">
          <ul>
            {Object.values(errors).map(value => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
      )}
    </div>

  )

}


export default Login
