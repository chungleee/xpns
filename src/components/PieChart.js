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
    legend: { position: 'bottom' },
    size: { height: 250, width: 100 }
  }

  return (
    <div>
      <Doughnut
        data={chartProperties.data}
        legend={chartProperties.legend}
        width={chartProperties.size.width}
        height={chartProperties.size.height}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  )
}

export default PieChart
