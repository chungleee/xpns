import React from 'react'

const ListGrid = ({ children }) => {
  return (
    <div className="pl4 pr4" style={{ position: 'relative', top: '-45px' }}>
      {children}
    </div>
  )
}

export default ListGrid
