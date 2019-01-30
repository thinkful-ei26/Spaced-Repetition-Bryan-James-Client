import React, { Component } from 'react'
import { connect } from 'react-redux'
import requiresLogin from './requires-login'

export class Progress extends Component {
  render() {
    return (
      <div>
        <p className='score'>Session Score: {this.props.score} / 10</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    validateData: state.validateResponse.data,
    current: state.protectedData.data.id,
    all: state.protectedData.allQuestions,
    score: state.protectedData.sessionScore
  })
}

export default requiresLogin()(connect(mapStateToProps)(Progress))
