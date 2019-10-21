import React, { Fragment } from 'react'
import { Formik } from 'formik'
import moment from 'moment'
import * as yup from 'yup'

const validateExpenseFormSchema = yup.object().shape({
  date: yup.string().required(),
  category: yup.string().required(),
  amount: yup
    .number()
    .required()
    .positive()
    .integer()
})

const AddExpense = () => {
  return (
    <Fragment>
      <Formik
        validationSchema={validateExpenseFormSchema}
        initialValues={{
          date: moment().format('MMMM Do, YYYY'),
          category: '',
          amount: 0
        }}
        render={({ handleSubmit, handleChange, values, errors }) => {
          return (
            <div>
              <section className="h5 flex justify-center items-center bg-red">
                <div className="tc washed-yellow">
                  <p className="f1 mt2 mb2">{`$ ${values.amount}`}</p>
                  <small>{values.category}</small>
                </div>
              </section>
              <form
                onSubmit={handleSubmit}
                className="pa4 black-80 flex flex-column justify-center items-center"
              >
                <div className="measure w-90">
                  <label className="f6 b db mb2">Date</label>
                  <p className="f4 mb2">{values.date}</p>
                </div>
                <div className="measure w-90 mb2">
                  <label htmlFor="amount" className="f6 b db mb2">
                    Amount
                  </label>
                  <input
                    onChange={handleChange}
                    name="amount"
                    className="input-reset ba b--black-20 pa2 mb2 db w-100"
                    value={values.amount}
                    type="tel"
                  />
                  {errors.amount ? (
                    <small className="red">{errors.amount}</small>
                  ) : null}
                </div>
                <div className="measure w-90 mb2">
                  <label htmlFor="category" className="f6 b db mb2">
                    Category
                  </label>
                  <input
                    onChange={handleChange}
                    name="category"
                    className="input-reset ba b--black-20 pa2 mb2 db w-100"
                    type="text"
                  />
                  {errors.category ? (
                    <small className="red">{errors.category}</small>
                  ) : null}
                </div>
                <button type="submit">Add expense</button>
              </form>
            </div>
          )
        }}
      />
    </Fragment>
  )
}

export default AddExpense
