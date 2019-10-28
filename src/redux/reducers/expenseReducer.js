import { ADD_EXPENSE, GET_ALL_EXPENSES } from '../actions/types'

const initialState = {
  allExpenses: []
}

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return { ...state }
    case GET_ALL_EXPENSES:
      return {
        ...state,
        allExpenses: action.payload
      }
    default:
      return state
  }
}

export default expenseReducer
