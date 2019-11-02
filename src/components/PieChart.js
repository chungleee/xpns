import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { getData } from '../utils/'

const PieChart = ({ datasets }) => {
  const { labels, amounts, colors } = getData(datasets)

  const chartProperties = {
    data: {
      labels,
      datasets: [
        {
          data: amounts,
          backgroundColor: colors,
          hoverBackgroundColor: colors
        }
      ]
    },
    legend: { position: 'bottom' }
  }

  return (
    <div className="pl2 pr2" style={{ height: '70vh', width: '100%' }}>
      <Doughnut
        data={chartProperties.data}
        legend={chartProperties.legend}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  )
}

export default PieChart
