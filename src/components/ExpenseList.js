import React, { Fragment } from 'react'

const ExpenseList = () => {
  const expenses = [
    {
      category: 'groceries',
      cost: 1.25
    },
    {
      category: 'food',
      cost: 20
    },
    {
      category: 'rent',
      cost: 1300
    },
    {
      category: 'groceries',
      cost: 1.25
    },
    {
      category: 'food',
      cost: 20
    },
    {
      category: 'rent',
      cost: 1300
    },
    {
      category: 'groceries',
      cost: 1.25
    },
    {
      category: 'food',
      cost: 20
    },
    {
      category: 'rent',
      cost: 1300
    }
  ]

  return (
    <Fragment>
      {expenses.map(({ category, cost }, idx) => {
        return (
          <li
            key={idx}
            className="bn shadow-3 br3 mt3 mb3 flex justify-between items-center h3 bg-white"
          >
            <p className="ml3 ttc">{category}</p>
            <p className="mr3">${cost}</p>
          </li>
        )
      })}
    </Fragment>
  )
}

export default ExpenseList
