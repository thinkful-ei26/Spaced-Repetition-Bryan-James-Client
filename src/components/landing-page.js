import React from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

import LoginForm from './login-form'

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to='/dashboard' />
  }

  // Our landing page should explain to the user the name and purpose of the application.
  // If the user is logged in, we will redirect the user to the specific dashboard.
  // Else, we will explain the purpose of the application. Should offer two additional buttons for Login/Register
  return (
    <div className='home title'>
      <h2>Welcome to Learn Python!</h2>
      <div className='landing about'>
        Before they sold out farm-to-table master cleanse beard, flexitarian
        echo park iPhone quinoa +1 cloud bread gluten-free hell of man bun.
        Mumblecore fingerstache tote bag ramps. Shabby chic hell of hoodie YOLO
        typewriter you probably haven't heard of them hammock tbh hexagon
        readymade chartreuse portland williamsburg copper mug yuccie. Lo-fi
        PBR&B lumbersexual four loko poutine blue bottle. Jean shorts chillwave
        marfa vice direct trade, tousled beard.
      </div>
      <Link to='/login'>Login</Link>
      <Link to='/register'>Register</Link>
    </div>
  )
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
})

export default connect(mapStateToProps)(LandingPage)
