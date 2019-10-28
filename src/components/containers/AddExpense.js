import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { Formik } from 'formik'
import moment from 'moment'
import { validateExpenseFormSchema, validate } from '../../utils/validation'
import { addExpense } from '../../redux/actions/expenseActions'

const categories = [
  'select category',
  'other',
  'groceries',
  'eating out',
  'rent',
  'shopping',
  'movies'
]

const initialValues = {
  date: moment().format('MMMM Do, YYYY'),
  category: '',
  other: '',
  amount: ''
}

const AddExpense = ({ history }) => {
  const dispatch = useDispatch()
  return (
    <Fragment>
      <Formik
        onSubmit={({ amount, category, date, other }) => {
          // create new expense obj
          const newExpense = { amount, category, date, other }
          // pass obj & dispatch action
          dispatch(addExpense(newExpense))
          // redirect to home
          history.push('/')
        }}
        validate={validate}
        validateOnChange={false}
        validationSchema={validateExpenseFormSchema}
        initialValues={initialValues}
        render={({ handleSubmit, handleChange, values, errors }) => {
          return (
            <div>
              <section className="h5 flex justify-center items-center bg-red">
                <div className="tc washed-yellow">
                  <p className="f1 mt2 mb2">
                    $ {values.amount === null ? '0' : values.amount}
                  </p>
                  <small>
                    {values.category === 'other'
                      ? values.other
                      : values.category}
                  </small>
                </div>
              </section>
              <form
                onSubmit={handleSubmit}
                className="pa4 mb4 black-80 flex flex-column justify-center items-center"
              >
                <div className="measure w-90 mb2">
                  <label className="f6 b db mb2">Date</label>
                  <p className="f4 mb2">{values.date}</p>
                </div>
                <div className="measure w-90 mb2">
                  <label htmlFor="category" className="f6 b db mb2">
                    Category
                  </label>
                  <select
                    className="input-reset ba b--black-20 pa2 mb2 db w-100"
                    name="category"
                    onChange={handleChange}
                  >
                    {categories.map((category, idx) => {
                      return (
                        <option
                          key={idx}
                          value={category === 'select category' ? '' : category}
                        >
                          {category}
                        </option>
                      )
                    })}
                  </select>
                  {errors.category ? (
                    <small className="red">{errors.category}</small>
                  ) : null}
                </div>

                {values.category === 'other' ? (
                  <div className="measure w-90 mb2">
                    <label className="f6 b db mb2">Other</label>
                    <input
                      onChange={handleChange}
                      name="other"
                      className="input-reset ba b--black-20 pa2 mb2 db w-100"
                      type="text"
                    />
                    {errors.other ? (
                      <small className="red">{errors.other}</small>
                    ) : null}
                  </div>
                ) : null}
                <div className="measure w-90 mb2">
                  <label htmlFor="amount" className="f6 b db mb2">
                    Amount
                  </label>
                  <input
                    onChange={handleChange}
                    name="amount"
                    className="input-reset ba b--black-20 pa2 mb2 db w-100"
                    value={values.amount}
                    type="number"
                  />
                  {errors.amount ? (
                    <small className="red">{errors.amount}</small>
                  ) : null}
                </div>
                <button
                  className="f6  dim ba ph3 pv2 mb2 dib near-black bg-white"
                  type="submit"
                >
                  Save
                </button>
              </form>
            </div>
          )
        }}
      />
    </Fragment>
  )
}

export default AddExpense
