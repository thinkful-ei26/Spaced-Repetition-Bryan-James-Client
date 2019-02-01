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
    this.state = { logOutWait: false }

  }
  componentDidMount() {
    this.props.dispatch(clearAuth())
    this.props.dispatch(logoutProtectedData());
    this.props.dispatch(logoutValidate());
    clearAuthToken()
    setTimeout(
      () => {
        this.setState({ logOutWait: true })
      },
      3 * 1000 // One day refresh token
    )
  }

  render() {
    if (!this.state.logOutWait) {
      return (<div className='container'>
        <div className="card">
          <div className="center">
            <span className="logout text-red">
              You have successfully logged out.
        </span>
          </div>
        </div>
      </div>)
    } else {
      return (
        <div>
          <Redirect to='/' />
        </div>
      )
    }
  }
}


const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
})



export default connect(mapStateToProps)(Logout)


