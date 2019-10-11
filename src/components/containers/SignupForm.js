import React from 'react'

const SignupForm = () => {
  return (
    <article className="pa4 black-80">
      <form>
        <div className="ba b--transparent ph0 mh0">
          <legend className="ph0 mh0 fw6 clip">Sign Up</legend>
          <div className="mt3">
            <label htmlFor="email" className="db fw4 lh-copy f6">Email</label>
            <input type="email" className="pa2 input-reset ba bg-transparent w-100 measure"/>
          </div>
          <div className="mt3">
            <label htmlFor="password" className="db fw4 lh-copy f6">Password</label>
            <input type="password" className="pa2 input-reset ba bg-transparent w-100 measure"/>
          </div>
          <div className="mt3">
            <label htmlFor="confirm-password" className="db fw4 lh-copy f6">Confirm Password</label>
            <input type="password" className="pa2 input-reset ba bg-transparent w-100 measure"/>
          </div>
          <div className='mt3'>
            <input type="submit" value='Sign Up' className="b ph3 pv2 input-reset ba bg-transparent grow pointer f6"/>
          </div>
        </div>
      </form>
    </article>
  )
}

export default SignupForm;