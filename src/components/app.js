import React from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
// import BackgroundImage from '../../public/background.jpg'
import HeaderBar from './header-bar'
import LandingPage from './landing-page'
import Dashboard from './dashboard'
import RegistrationPage from './registration-page'
import { refreshAuthToken } from '../actions/auth'
import LoginPage from './login-page'
import Logout from './logout'

export class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh()
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh()
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh()
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(
      () => this.props.dispatch(refreshAuthToken()),
      24 * 60 * 60 * 1000 // One day refresh token
    )
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return
    }

    clearInterval(this.refreshInterval)
  }

  render() {
    return (
      <div className='app'>

        {/* <img sizes="(max-width: 767px) 100vw, (max-width: 532px) 500px, (max-height: 501px) 500px, (min-aspect-ratio: 3992/2242) calc((calc(100vh - 220px)) * 1.78055), calc(100vw - 32px)" src="/background.jpg" /> */}
        <HeaderBar />
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/register' component={RegistrationPage} />
        <Route exact path='/logout' component={Logout} test='test' />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null,
})

// Deal with update blocking - https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
export default withRouter(connect(mapStateToProps)(App))
