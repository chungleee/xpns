import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const PieChart = () => {
  const chartProperties = {
    data: {
      labels: ['Red', 'Green', 'Yellow'],
      datasets: [
        {
          data: [100, 500, 1325],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
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
