import React from 'react'
import { connect } from 'react-redux'
import { resetUserQuestions } from '../actions/protected-data'
import { Link } from 'react-router-dom'

export class HeaderBar extends React.Component {
  resetQuestions() {
    //won't have to delete && register user to test logic finally
    this.props.dispatch(resetUserQuestions())
  }

  render() {
    // Only render the log out button if we are logged in
    let logOutButton
    let easyBtn
    // let hamburgerBtn
    let loginBtn = (
      <li>
        <Link to='/login' className='waves-effect waves-light btn'>
          Login
        </Link>
      </li>
    )
    let registerBtn = (
      <li>
        <Link to='/register' className='waves-effect waves-light btn'>
          Register
        </Link>
      </li>
    )
    let trialBtn = (
      <li>
        <Link to='/trial' className='waves-effect waves-light btn'>
          Trial
        </Link>
      </li>
    )
    if (this.props.loggedIn) {
      logOutButton = (
        <Link to='/logout' className='waves-effect waves-light btn'>
          Log Out
        </Link>
      )
      // logOutButton = <button className='logoutBtn' onClick={() => this.logOut()}>Log out</button>;
      easyBtn = (
        <a href='#reset' className='waves-effect waves-light btn resetBtn' onClick={() => this.resetQuestions()}>
          Reset Questions
        </a>
      )
      // hamburgerBtn = (<ul class="sidenav right" id="mobile-demo">
      //   <li>{logOutButton}</li>
      //   <li>{easyBtn}</li>
      // </ul>)
      loginBtn = null
      registerBtn = null
      trialBtn = null
    }
    return (
      <div className=''>
        <nav>
          <div className='nav-wrapper teal'>
            <div className='padding'>
              <a href='/' className='brand-logo left'>
                <i className='material-icons left'>computer</i>
                Easy as Python
              </a>
            </div>
            <a href='/' data-target='mobile-demo' className='sidenav-trigger right'>
              <i className='material-icons right'>menu</i>
            </a>
            <ul className='right hide-on-med-and-down'>
              {loginBtn}
              {registerBtn}
              {trialBtn}
              <li>{logOutButton}</li>
              <li>{easyBtn}</li>
            </ul>
          </div>
        </nav>
        {/* {hamburgerBtn} */}
        <ul className='sidenav right' id='mobile-demo'>
          {loginBtn}
          {registerBtn}
          {trialBtn}
          <li>{logOutButton}</li>
          <li>{easyBtn}</li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
})

export default connect(mapStateToProps)(HeaderBar)
