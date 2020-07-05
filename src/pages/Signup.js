import React, { useState, useContext  } from 'react'
import { useMutation } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { AuthContext } from '../context/Auth'
import './Form.css'

// creating GraphQL query

const FETCH_USERS_QUERY = gql`
  {
    getUsers{
    id
    name 
    username
    email 
    }
  }
`

// creating GraphQL mutation 

const SIGN_UP = gql`
      mutation register(
        $name: String!
        $username: String!
        $email: String!
        $password: String!
        $confirmPassword: String!
        ) {
      register(registerInput: {
        name: $name
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
        }
        ) {
        id
        name
        username
        email
        token
    }
  }
  `

const Signup = (props) => {
  const context = useContext(AuthContext)

  const [errors, setErrors] = useState({})

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

  // executing a mutation, refetching users query after the mutation 

  const [addUser] = useMutation(SIGN_UP, {
    update(_, { data: { register: userData }}){
      context.login(userData)
      props.history.push('/users')
    },
    onError(err) {
      console.log(err.graphQLErrors[0].extensions.exception.errors)
      setErrors(err.graphQLErrors[0].extensions.exception.errors)

    },
      variables: values,
      refetchQueries: [
      { query: FETCH_USERS_QUERY }
    ]
    }
  )

  const onSubmit = (event) => {
    event.preventDefault()
    addUser()
  }


  return (
      <div>
        <form onSubmit={onSubmit}>
          <h1 className="form-title">Sign Up</h1>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Guy"
            value={values.name}
            onChange={onChange} />
          <label htmlFor="username">Username</label>  
          <input
            id="username"
            name="username"
            type="text"
            placeholder="some_guy"
            value={values.username}
              onChange={onChange} />
          <label htmlFor="email">Email</label>      
          <input
            id="email"
            name="email"
            type="email"
            placeholder="guy@gmail.com"
            value={values.email}
            onChange={onChange} />
          <label htmlFor="password">Password</label>  
          <input
            id="password"
            name="password"
            type="password"
            value={values.password}
            onChange={onChange} />
          <label htmlFor="confirmPassword">Confirm password</label>  
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={values.confirmPassword}
            onChange={onChange} />
          <button type="submit"className="form-button">
            SIGN UP
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


export default Signup
