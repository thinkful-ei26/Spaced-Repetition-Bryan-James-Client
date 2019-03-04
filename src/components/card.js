import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { fetchProtectedData, countCorrect, countWrong } from '../actions/protected-data'
import Input from './input'
import { required, nonEmpty } from '../validators'
import { validateResponse } from '../actions/validate-response'
import Feedback from './feedback'

export class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      feedbackVisible: false,
      hasAnswered: false,
    }
  }
  onSubmit(userInput) {
    let answerObject = {
      id: this.props.protectedData.id,
      Answer: userInput.answer,
    }
    // Once we submit, change the state of hidden to false

    return this.props.dispatch(validateResponse(answerObject)).then(() => {
      //here this.props.validateData has been updated
      if (this.props.validateData === 'Correct') {
        this.props.dispatch(countCorrect({ id: this.props.protectedData.id }))
      } else {
        this.props.dispatch(countWrong({ id: this.props.protectedData.id }))
      }
      this.setState({ feedbackVisible: true, hasAnswered: true })
    })
  }
  onNext() {
    let nextQuestionObject = {
      nextQuestionIndex: this.props.protectedData.next,
    }
    this.setState({ feedbackVisible: false, hasAnswered: false })
    return this.props.dispatch(fetchProtectedData(nextQuestionObject))
  }
  render() {
    let submitBtn = (
      <a
        href='#submit'
        className='waves-effect waves-teal lighten-2 btn-flat'
        onClick={this.props.handleSubmit(values => this.onSubmit(values))}>
        Submit
      </a>
    )
    if (this.props.pristine || this.props.submitting || this.state.hasAnswered) {
      submitBtn = (
        <a href='#submit' className='waves-effect waves-teal lighten-2 btn-flat disabled'>
          Submit
        </a>
      )
    }
    return (
      <div className='question card col s12 m8 l6 flow-text'>
        <div className='question component col s6 m6 l6'>
          <span className='bold'>Question: </span>
          {this.props.protectedData.Question}
        </div>

        <Feedback data={this.props.validateData} feedbackVisible={this.state.feedbackVisible} />
        <form
          className='answer-form col s6 m6 l6 center-align'
          onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
          <label htmlFor='answer center-align'>Type Your Answer Below</label>
          <Field component={Input} type='text' name='answer' id='answer' validate={[required, nonEmpty]} />

          <div className='center-align'>
            {submitBtn}
            <a href='#next' className='waves-effect waves-teal lighten-2 btn-flat' onClick={() => this.onNext()}>
              Next
            </a>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    validateData: state.validateResponse.data,
  }
}

export default reduxForm({
  form: 'userResponse',
})(connect(mapStateToProps)(Card))
