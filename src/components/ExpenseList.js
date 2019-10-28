import React, { Fragment } from 'react'

const ExpenseList = ({ expenses }) => {
  return (
    <Fragment>
      {expenses.map(({ doc, id }) => {
        return (
          <li
            key={id}
            className="bn shadow-3 br3 mt3 mb3 flex justify-between items-center h3 bg-white grow"
          >
            <div>
              <p className="ml3 ttc">
                {doc.category === 'other' ? doc.other : doc.category}
              </p>
              <small className="ml3">{doc.date}</small>
            </div>
            <p className="mr3">${doc.amount}</p>
          </li>
        )
      })}
    </Fragment>
  )
}

export default ExpenseList
