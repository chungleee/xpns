import React from 'react'

const ListGrid = ({ children, style }) => {
  return (
    <div className="pl4 pr4 pb4" style={style}>
      {children}
    </div>
  )
}

export default ListGrid
