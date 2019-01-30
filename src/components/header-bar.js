import React from 'react'
import { connect } from 'react-redux'
import { clearAuth } from '../actions/auth'
import { clearAuthToken } from '../local-storage'
import { logoutProtectedData } from '../actions/protected-data';
import { logoutValidate } from '../actions/validate-response';

export class HeaderBar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth())
    //also dispatch clear state for protectedData and validateResponse redux
    this.props.dispatch(logoutProtectedData());
    this.props.dispatch(logoutValidate());
    clearAuthToken()
  }

  render() {
    // Only render the log out button if we are logged in
    let logOutButton
    if (this.props.loggedIn) {
      logOutButton = <button onClick={() => this.logOut()}>Log out</button>
    }
    return (
      <div className='header-bar'>
        <h1>Learn Python</h1>
        {logOutButton}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
})

export default connect(mapStateToProps)(HeaderBar)
