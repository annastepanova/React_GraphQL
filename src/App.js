import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Users from './Users'
import MainNavigation from './NavComponents/MainNavigation'
import { AuthProvider } from './context/Auth'

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
    <AuthProvider>
      <Router>
        <MainNavigation />
        <main id="center">
          {routes}
        </main>
      </Router>
    </AuthProvider> 
  )

}

export default App
