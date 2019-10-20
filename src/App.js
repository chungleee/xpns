import React from 'react'
import Balance from './components/Balance'
import ListGrid from './components/ListGrid'
import ExpenseList from './components/ExpenseList'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Balance />
      <ListGrid>
        <ExpenseList />
      </ListGrid>
      <Footer />
    </div>
  )
}

export default App
