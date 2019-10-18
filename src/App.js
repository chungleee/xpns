import React from 'react'
import Balance from './components/Balance'
import ListGrid from './components/ListGrid'
import ExpenseList from './components/ExpenseList'

const App = () => {
  return (
    <div>
      <Balance />
      <ListGrid>
        <ExpenseList />
      </ListGrid>
    </div>
  )
}

export default App
