import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import MainNavigation from './NavComponents/MainNavigation'
import { AuthProvider} from './context/Auth'
import AuthRoutes from './AuthRoute'

import './App.css'

const App = () => {


  return (
    <AuthProvider>
      <Router>
        <MainNavigation />
         <AuthRoutes/>
      </Router>
    </AuthProvider> 
  )

}

export default App
