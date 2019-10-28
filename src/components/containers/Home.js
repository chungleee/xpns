import React, { Fragment, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllExpenses } from '../../redux/actions/expenseActions'

import Balance from '../Balance'
import ListGrid from '../ListGrid'
import ExpenseList from '../ExpenseList'

const Home = () => {
  const dispatch = useDispatch()

  // get date on mount
  useEffect(() => {
    dispatch(getAllExpenses())
  }, [])

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
