import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div
      className="flex flex-column justify-around"
      style={{ height: '100vh' }}
    >
      <header className="ph3 tc">
        <h1 className="f1 fw5 lh-title ttu">x p n s</h1>
        <h2 className="f3 normal lh-copy">Track where your money goes</h2>
      </header>
      <section
        className="flex flex-column tc w-70 mb5"
        style={{ marginLeft: 'auto', marginRight: 'auto' }}
      >
        <Link to="/signup" className="f6 link dim br3 ba ph3 pv2 mb2 dib black">
          Sign Up
        </Link>
        <Link to="/signin" className="f6 link dim br3 ba ph3 pv2 mb2 dib black">
          Sign In
        </Link>
      </section>
    </div>
  )
}
export default Landing
