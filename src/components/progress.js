import React, { Component } from 'react'
import { connect } from 'react-redux'
import requiresLogin from './requires-login'

export class Progress extends Component {
  constructor(props){
    super(props)
    this.state= {
      pieImage : ['https://images.unsplash.com/photo-1535920527002-b35e96722eb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80','https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80' ,'img link url here3' ]// will go to 10 (later)
    }
  }
  
  render() {
   
    return (
      <div>
        <p className='score center-align'>Session Score: {this.props.score} / 10</p>
        <img src={this.state.pieImage[this.props.score]} alt='pie-progress pic'/>
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
