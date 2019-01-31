import React from 'react'
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'

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
    console.log('We are periodically refreshing')
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
        <img sizes="(max-width: 767px) 100vw, (max-width: 532px) 500px, (max-height: 501px) 500px, (min-aspect-ratio: 3992/2242) calc((calc(100vh - 220px)) * 1.78055), calc(100vw - 32px)" srcset="https://images.unsplash.com/photo-1526643416807-fe42463ac1d7?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=891&amp;q=80 891w, https://images.unsplash.com/photo-1526643416807-fe42463ac1d7?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1191&amp;q=80 1191w, https://images.unsplash.com/photo-1526643416807-fe42463ac1d7?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1491&amp;q=80 1491w, https://images.unsplash.com/photo-1526643416807-fe42463ac1d7?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1782&amp;q=80 1782w, https://images.unsplash.com/photo-1526643416807-fe42463ac1d7?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1791&amp;q=80 1791w, https://images.unsplash.com/photo-1526643416807-fe42463ac1d7?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2091&amp;q=80 2091w, https://images.unsplash.com/photo-1526643416807-fe42463ac1d7?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2382&amp;q=80 2382w, https://images.unsplash.com/photo-1526643416807-fe42463ac1d7?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2391&amp;q=80 2391w, https://images.unsplash.com/photo-1526643416807-fe42463ac1d7?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2691&amp;q=80 2691w, https://images.unsplash.com/photo-1526643416807-fe42463ac1d7?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2982&amp;q=80 2982w, https://images.unsplash.com/photo-1526643416807-fe42463ac1d7?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2991&amp;q=80 2991w, https://images.unsplash.com/photo-1526643416807-fe42463ac1d7?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=3291&amp;q=80 3291w, https://images.unsplash.com/photo-1526643416807-fe42463ac1d7?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=3582&amp;q=80 3582w, https://images.unsplash.com/photo-1526643416807-fe42463ac1d7?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=3591&amp;q=80 3591w, https://images.unsplash.com/photo-1526643416807-fe42463ac1d7?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=3891&amp;q=80 3891w, https://images.unsplash.com/photo-1526643416807-fe42463ac1d7?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=3992&amp;q=80 3992w, https://images.unsplash.com/photo-1526643416807-fe42463ac1d7?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=3992&amp;q=80 3992w, https://images.unsplash.com/photo-1526643416807-fe42463ac1d7?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=3992&amp;q=80 3992w, https://images.unsplash.com/photo-1526643416807-fe42463ac1d7?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=3992&amp;q=80 3992w, https://images.unsplash.com/photo-1526643416807-fe42463ac1d7?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=3992&amp;q=80 3992w, https://images.unsplash.com/photo-1526643416807-fe42463ac1d7?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=3992&amp;q=80 3992w, https://images.unsplash.com/photo-1526643416807-fe42463ac1d7?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=3992&amp;q=80 3992w, https://images.unsplash.com/photo-1526643416807-fe42463ac1d7?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=3992&amp;q=80 3992w, https://images.unsplash.com/photo-1526643416807-fe42463ac1d7?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=3992&amp;q=80 3992w" src="https://images.unsplash.com/photo-1526643416807-fe42463ac1d7?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80" alt="aerial photography of sea wave in shoreline" className="_2zEKz"></img>
        <HeaderBar />
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/register' component={RegistrationPage} />
        <Route exact path='/logout' component={Logout} />
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
