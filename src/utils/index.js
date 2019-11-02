import randomColor from 'randomcolor'

// takes expenses data obj and filter it into categories with their respective amounts summed up
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

// take data array and generate respective labels - amounts - colors for the chart
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

// sum up expenses for total balance
export const getTotalBalance = datas => {
  return datas.reduce((acc, current) => {
    return acc + current.doc.amount
  }, 0)
}
