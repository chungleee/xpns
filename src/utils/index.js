export const convertChartData = expenses => {
  // TODO
  // get labels aka categories minus duplicates
  const tempLabels = expenses.map(expense => {
    if (expense.category === 'other') {
      return expense.other
    } else {
      return expense.category
    }
  })
  const labels = new Set(tempLabels)

  // datasets -> data aka the sum of each category

  // return data obj
  return {
    labels
  }
}
