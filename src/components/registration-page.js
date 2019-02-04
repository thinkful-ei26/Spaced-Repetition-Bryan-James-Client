import React from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

import RegistrationForm from './registration-form'

export function RegistrationPage(props) {
  // If we are logged in (which happens automatically when registration
  // is successful) redirect to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to='/dashboard' />
  }
  return (
    <div className='container'>
      <span className="center">
        <h2>Register for Easy as Pie-thon</h2>
      </span>
      <div className='card'>
        <RegistrationForm parentError={props.error} />
        {/* <Link to='/login'>Login</Link> */}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
  error: state.register.error
})

export default connect(mapStateToProps)(RegistrationPage)
