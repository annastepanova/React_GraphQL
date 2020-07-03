import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Home from './Home'
import Signup from './Signup'
import Login from './Login'
import Users from './Users'
import MainNavigation from './NavComponents/MainNavigation'

import './App.css'

const App = () => {

  let routes = (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users" component={Users} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Redirect to="/" />
      </Switch>
    )


  return (
      <Router>
        <MainNavigation />
        <main id="center">
          {routes}
        </main>
      </Router>
  )

}

export default App
