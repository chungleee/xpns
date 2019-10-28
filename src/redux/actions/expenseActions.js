import db from '../../database'
import moment from 'moment'
import { ADD_EXPENSE, GET_ALL_EXPENSES } from './types'

export const addExpense = expenseObj => {
  return async dispatch => {
    const payload = await db.put({
      _id: moment()
        .unix()
        .toString(),
      ...expenseObj
    })

    dispatch({
      type: ADD_EXPENSE,
      payload
    })
  }
}

export const getAllExpenses = () => {
  return async dispatch => {
    const payload = await db.allDocs({ include_docs: true, descending: true })
    dispatch({
      type: GET_ALL_EXPENSES,
      payload: payload.rows
    })
  }
}
