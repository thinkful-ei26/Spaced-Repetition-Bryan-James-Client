import React, { Component } from 'react'
import { connect } from 'react-redux';
import { clearAuth } from '../actions/auth'
import { clearAuthToken } from '../local-storage'
import { logoutProtectedData } from '../actions/protected-data';
import { logoutValidate } from '../actions/validate-response';
import { Redirect } from 'react-router-dom'

export class Logout extends Component {
  constructor(props) {
    super(props)
    this.state = { logOutWait: '' }

  }
  componentDidMount() {
    this.props.dispatch(clearAuth())
    this.props.dispatch(logoutProtectedData());
    this.props.dispatch(logoutValidate());
    clearAuthToken()
    // this.redirectMethod()
  }

  // redirectMethod() {
  //   console.log('we are here')
  //   setInterval(
  //     () => { this.setState({ logOutWait: <Redirect to='/' /> }) },
  //     3 * 1000 // One day refresh token
  //   )
  // }

  render() {
    let logOutWait = ''
    setInterval(
      () => logOutWait = <Redirect to='/' />,
      3 * 1000 // One day refresh token
    )
    return (
      <div>
        <span className="logout">
          You have successfully logged out.
        </span>
        {logOutWait}
      </div>
    )
  }
}


const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
})



export default connect(mapStateToProps)(Logout)


