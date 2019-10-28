import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllExpenses } from '../../redux/actions/expenseActions'

import Balance from '../Balance'
import ListGrid from '../ListGrid'
import ExpenseList from '../ExpenseList'

const Home = () => {
  const dispatch = useDispatch()
  const expenses = useSelector(({ expenses }) => {
    return expenses.allExpenses
  })

  // get data on mount
  useEffect(() => {
    dispatch(getAllExpenses())
  }, [])

  return (
    <Fragment>
      <Balance />
      <ListGrid style={{ position: 'relative', top: '-45px' }}>
        <ExpenseList expenses={expenses} />
      </ListGrid>
    </Fragment>
  )
}

export default Home
