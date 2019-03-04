import React, { Component } from 'react'
export default class Feedback extends Component {
  render() {
    if (this.props.data === 'Correct') {
      return this.props.data && this.props.feedbackVisible ? (
        <div className='feedback center-align text-red'>{this.props.data}</div>
      ) : (
        <div className='feedback' />
      )
    } else {
      //here wrong answer feedback
      return this.props.data && this.props.feedbackVisible ? (
        <div className='feedback center-align text-red'>
          <img
            src='https://images.unsplash.com/photo-1511029029301-60680e65f7c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80'
            alt='sad puppers no pie for you'
          />
          <p className='red-text'>{this.props.data}</p>
        </div>
      ) : (
        <div className='feedback' />
      )
    }
  }
}
