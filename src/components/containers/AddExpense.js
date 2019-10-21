import React, { Fragment } from 'react'
import { Formik } from 'formik'
import moment from 'moment'

const AddExpense = () => {
  return (
    <Fragment>
      <Formik
        initialValues={{
          date: moment().format('MMMM Do, YYYY'),
          category: '',
          amount: 0
        }}
        render={({ handleSubmit, handleChange, values }) => {
          return (
            <div>
              <section className="h5 flex justify-center items-center bg-red">
                <div className="tc washed-yellow">
                  <p className="f1 mt2 mb2">{`$ ${values.amount}`}</p>
                </div>
              </section>
              <form onSubmit={handleSubmit} className="pa4 black-80">
                <div className="measure">
                  <label className="f6 b db mb2">Date</label>
                  <p className="f4 mb2">{values.date}</p>
                </div>
                <div className="measure">
                  <label htmlFor="amount" className="f6 b db mb2">
                    Amount
                  </label>
                  <input
                    onChange={handleChange}
                    name="amount"
                    className="input-reset ba b--black-20 pa2 mb2 db w-100"
                    type="tel"
                  />
                </div>
                <div className="measure">
                  <label htmlFor="category" className="f6 b db mb2">
                    Category
                  </label>
                  <input
                    onChange={handleChange}
                    name="category"
                    className="input-reset ba b--black-20 pa2 mb2 db w-100"
                    type="text"
                  />
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
