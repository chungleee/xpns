import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import AddExpense from './components/containers/AddExpense'
import ChartExpense from './components/containers/ChartExpense'
import Footer from './components/Footer'
import Home from './components/containers/Home'

const App = () => {
  return (
    <Router>
      <Footer />
      <Route exact path="/" component={Home} />
      <Route exact path="/addexpense" component={AddExpense} />
      <Route exact path="/chart" component={ChartExpense} />
    </Router>
  )
}

export default App
