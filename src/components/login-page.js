import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import LoginForm from './login-form'

export function LoginPage(props) {
  // If we are logged in (which happens automatically when Login
  // is successful) redirect to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to='/dashboard' />
  }
  return (
    <div className='container'>
      <div className="card s6 m6 l6">
        <div className='login form card'>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
})

export default connect(mapStateToProps)(LoginPage)
