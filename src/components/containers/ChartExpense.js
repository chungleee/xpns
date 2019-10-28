import React, { useEffect } from 'react'
import { convertChartData } from '../../utils'
import { useSelector } from 'react-redux'

import PieChart from '../PieChart'

const ChartExpense = () => {
  const data = useSelector(({ expenses }) => {
    return expenses.allExpenses.map(expense => {
      return expense.doc
    })
  })

  useEffect(() => {
    convertChartData(data)
  }, [])

  return (
    <div>
      <PieChart />
    </div>
  )
}

export default ChartExpense
