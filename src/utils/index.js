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

  // const datasets = expenses.reduce((acc, current) => {
  //   let item = acc[current.category]
  //   if (item) {
  //     item.amount += current.amount
  //   } else {
  //     acc[current.category] = current
  //   }
  //   return acc
  // }, {})

  // return Object.values(datasets)
}
