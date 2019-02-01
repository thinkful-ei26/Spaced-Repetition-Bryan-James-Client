import React from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import Trial from './trial'

// import LoginForm from './login-form'

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to='/dashboard' />
  }

  // Our landing page should explain to the user the name and purpose of the application.
  // If the user is logged in, we will redirect the user to the specific dashboard.
  // Else, we will explain the purpose of the application. Should offer two additional buttons for Login/Register
  return (
    <div className='home title container'>
      <div className="center">
        <h2>Learn with 'Easy as Python' </h2>
      </div>
      <div className='landing about card'>
        <h5>Easy as Python is an easy to use app for memorizing some Python code. Users can read simple facts about the Python programming language. Registering for the App allows the user to login to store their progress and get a score depending on how many questions they have answered correctly.
        </h5>
      </div>
      {/* <Link to='/login'>Login</Link>
      <Link to='/register'>Register</Link>
      <Link to='/trial'>Trial</Link> */}
    </div>
  )
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
})

export default connect(mapStateToProps)(LandingPage)
