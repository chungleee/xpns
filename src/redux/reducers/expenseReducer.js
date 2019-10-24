const initialState = {}

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_EXPENSE':
      console.log(action.payload)
      return null

    default:
      return state
  }
}

export default expenseReducer
