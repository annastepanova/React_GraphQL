import React, { useContext } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Users from './pages/Users'
import { AuthContext } from './context/Auth'

const AuthRoutes = () => {

  const { user } = useContext(AuthContext)

  let routes

  if (user) {
    routes = (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={Users} />
        <Redirect to="/" />
      </Switch>
    )
  }
  else {
    routes = (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Redirect to="/signup" />
      </Switch>
    )
  }

  return (

    <main id="center">
      {routes}
    </main>

  )
}

export default AuthRoutes