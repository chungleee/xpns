export const logExpense = expense => {
  return {
    type: 'LOG_EXPENSE',
    payload: expense
  }
}
