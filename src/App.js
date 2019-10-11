import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from './components/containers/Landing'
import SignupForm from './components/containers/SignupForm'

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Landing />
      </Route>

      <Route path="/signup">
        <SignupForm />
      </Route>
    </Router>
  )
}

export default App
