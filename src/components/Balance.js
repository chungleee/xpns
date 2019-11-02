import React from 'react'
import moment from 'moment'

const Balance = ({ balance }) => {
  return (
    <div className="h5 flex justify-center items-center bg-red">
      <div className="tc washed-yellow">
        <p className="f7 ttu">current expenses</p>
        <p className="f1 mt2 mb2">${balance}</p>
        <p className="f7">As of {moment().format('MMMM Do, YYYY')}</p>
      </div>
    </div>
  )
}

export default Balance
