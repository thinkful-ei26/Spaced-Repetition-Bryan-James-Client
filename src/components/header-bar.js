import React from 'react'
import { connect } from 'react-redux'
import { resetUserQuestions } from '../actions/protected-data';
import { Link } from 'react-router-dom'

export class HeaderBar extends React.Component {

  resetQuestions() {
    //won't have to delete && register user to test logic finally
    this.props.dispatch(resetUserQuestions())
  }

  render() {
    // Only render the log out button if we are logged in
    let logOutButton
    let easyBtn;
    if (this.props.loggedIn) {
      logOutButton = <Link to='/logout'>Log Out</Link>
      // logOutButton = <button className='logoutBtn' onClick={() => this.logOut()}>Log out</button>;
      easyBtn = <button className='resetBtn' onClick={() => this.resetQuestions()}>Reset Questions</button>;
    }
    return (
      <div className='header-bar'>
        <h1>Learn Python</h1>
        {logOutButton}
        {easyBtn}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
})

export default connect(mapStateToProps)(HeaderBar)
