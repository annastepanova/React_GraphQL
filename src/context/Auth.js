import React, { useReducer, createContext } from 'react'
import jwt_decode from 'jwt-decode'


const initialState = {
  user: null
}

// decoding jwt token and checking if token is expired

if (localStorage.getItem('jwtToken')) {
  const decodedToken = jwt_decode(localStorage.getItem('jwtToken'))

  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem('jwtToken')
  } else {
    initialState.user = decodedToken
  }
}

// creating a Context object

const AuthContext = createContext({
  user: null,
  login: (userData) => {},
  logout: () => {}
})


const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload
      }
    case 'LOGOUT':
      return {
        ...state,
        user: null
      }
    default:
      return state
  }
}

// creating AuthProvider component that allows consuming components to subscribe to context changes

const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(authReducer, initialState)

  const login = (userData) => {

    // storing jwt token in local storage
    localStorage.setItem('jwtToken', userData.token)

    dispatch({
      type: 'LOGIN',
      payload: userData
    })
  }

  const logout = () => {

    // removing jwt token from local storage
    localStorage.removeItem('jwtToken')

    dispatch({ type: 'LOGOUT' })
  }

  return (
    <AuthContext.Provider
      value={{ user: state.user, login, logout }}
      {...props}
    />
  )
}

export { AuthContext, AuthProvider }
