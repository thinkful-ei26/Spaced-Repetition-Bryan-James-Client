import React, { Component } from 'react'
import { connect } from 'react-redux'
import requiresLogin from './requires-login'

export class Progress extends Component {
  render() {
    let currentQuestion = this.props.all.filter(eachQ=> eachQ.id===this.props.current)
    let currentQuestionScore = 0;
    if(currentQuestion.length > 0){
      currentQuestionScore = currentQuestion[0].count;
    }
    return (
      <div>
        <p className='score'>This question Score: {currentQuestionScore} / 10</p>
      </div>
    )
  }
}

// this.props.all is an array of all questions with an .id and .count starting at 0 on login
const mapStateToProps = state => {
  return ({
    validateData: state.validateResponse.data,
    current: state.protectedData.data.id,
    all: state.protectedData.allQuestions
  })
}

export default requiresLogin()(connect(mapStateToProps)(Progress))
