import React from 'react'
import { convertChartData } from '../../utils'
import { useSelector } from 'react-redux'

import PieChart from '../PieChart'

const ChartExpense = () => {
  const datasets = useSelector(({ expenses }) => {
    const dataToConvert = expenses.allExpenses.map(expense => {
      return expense.doc
    })
    return convertChartData(dataToConvert)
  })

  return datasets.length <= 0 ? (
    <div className="flex justify-center">
      <p>Data unavailable</p>
    </div>
  ) : (
    <div
      style={{
        height: '87vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <PieChart datasets={datasets} />
    </div>
  )
}

export default ChartExpense
