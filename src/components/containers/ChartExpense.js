import React, { useEffect } from 'react'
import { convertChartData } from '../../utils'
import { useSelector } from 'react-redux'

import PieChart from '../PieChart'

const ChartExpense = () => {
  // const data = useSelector(({ expenses }) => {
  //   return expenses.allExpenses.map(expense => {
  //     return expense.doc
  //   })
  // })

  const data = useSelector(({ expenses }) => {
    const dataToConvert = expenses.allExpenses.map(expense => {
      return expense.doc
    })
    return convertChartData(dataToConvert)
  })

  return (
    <div>
      <PieChart data={data} />
    </div>
  )
}

export default ChartExpense
