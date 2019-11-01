import randomColor from 'randomcolor'
export const convertChartData = expenses => {
  const datasets = expenses.reduce((acc, current) => {
    acc[current.category === 'other' ? current.other : current.category] = acc[
      current.category
    ] || {
      category: current.category === 'other' ? current.other : current.category,
      amount: 0
    }
    acc[
      current.category === 'other' ? current.other : current.category
    ].amount += current.amount
    return acc
  }, {})

  return Object.values(datasets)
}

export const getData = expensesData => {
  const labels = []
  const amounts = []
  const colors = []
  expensesData.forEach(element => {
    labels.push(element.category)
    amounts.push(element.amount)
    colors.push(randomColor())
  })
  return {
    labels,
    amounts,
    colors
  }
}
