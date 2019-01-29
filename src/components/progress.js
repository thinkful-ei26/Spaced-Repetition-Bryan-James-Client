import React, { Component } from 'react'
import { connect } from 'react-redux'
import requiresLogin from './requires-login'


export class Progress extends Component {
  constructor(props) {
    super(props)
    let count;
    let HELLOIMVARIABLE = {
      Q0: 0,
      Q1: 0,
      Q2: 0,
      Q3: 0,
      Q4: 0,
      Q5: 0,
      Q6: 0,
      Q7: 0,
      Q8: 0,
      Q9: 0,
    }
  }
  // If we make a state local to progress, maybe we don't have to do that. 
  // Capture the variable instead
  // We have a validate data prop. So this.props.validateData
  // So the first thing we're gonna do. Maybe we have a component lifecycle method,
  //  than our variable or state or prop thing is equal to 0. Maybe it's an array. NO ONE KNOWS
  // When we update, when we can check our validateDataThing.
  // If this.props.validateData = correct than do some stuff
  componentDidUpdate() {
    console.log('hello', this.props.validateData)
    // by the way what was the question and store that???
    if (this.props.validateData === 'Correct') {
      // we know what the question is and that the user got it right
      Q[variable]++
    } else {
      console.log('nevermind')
    }
    console.log('Q0', this.state.Q0)
  }
  render() {
    let count = []
    return (
      <div>
        Hi I'm progress.
      </div>
    )
  }
}


const mapStateToProps = state => {
  return ({
    validateData: state.validateResponse.data,
    protectedData: state.protectedData,
  })
}

export default requiresLogin()(connect(mapStateToProps)(Progress))
