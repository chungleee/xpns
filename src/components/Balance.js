import React from 'react'

const Balance = () => {
  return (
    <div className="h5 flex justify-center items-center" style={style.gradient}>
      <div className="tc">
        <p className="f7 ttu">current balance</p>
        <p className="f1">$500</p>
        <p className="f7">October 2019</p>
      </div>
    </div>
  )
}

const style = {
  gradient: {
    background: '#E0EAFC',
    background: '-webkit-linear-gradient(to right, #CFDEF3, #E0EAFC)',
    background: 'linear-gradient(to right, #CFDEF3, #E0EAFC)'
  }
}

export default Balance
