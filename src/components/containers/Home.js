import React, { Fragment } from 'react'
import Balance from '../Balance'
import ListGrid from '../ListGrid'
import ExpenseList from '../ExpenseList'

const Home = () => {
  return (
    <Fragment>
      <Balance />
      <ListGrid style={{ position: 'relative', top: '-45px' }}>
        <ExpenseList />
      </ListGrid>
    </Fragment>
  )
}

export default Home
