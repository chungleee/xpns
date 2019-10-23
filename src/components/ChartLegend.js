import React from 'react'
import ExpenseList from './ExpenseList'
import ListGrid from './ListGrid'

const ChartLegend = () => {
  return (
    <div className="pb4">
      <ListGrid>
        <ExpenseList />
      </ListGrid>
    </div>
  )
}

export default ChartLegend
