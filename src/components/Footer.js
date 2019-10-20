import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer
      className="flex justify-around items-center bg-near-white h3 fixed bottom-0 w-100"
      style={{ zIndex: '9999' }}
    >
      <Link to="/" className="link black dim pl3 pr3">
        <i className="fas fa-home f3"></i>
      </Link>
      <Link to="/addexpense" className="link black dim pl3 pr3">
        <i className="fas fa-plus f3"></i>
      </Link>
      <Link to="/chart" className="link black dim pl3 pr3">
        <i className="fas fa-chart-pie f3"></i>
      </Link>
    </footer>
  )
}

export default Footer
