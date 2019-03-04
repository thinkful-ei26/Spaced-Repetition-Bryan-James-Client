import React, { Component } from 'react'
import { connect } from 'react-redux'
import requiresLogin from './requires-login'

export class Progress extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pieImage: ['https://images.unsplash.com/photo-1531984970149-862affa9a7ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80',
        'https://images.unsplash.com/photo-1509461399763-ae67a981b254?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80',
        'https://images.unsplash.com/photo-1476887334197-56adbf254e1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80',
        'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80',
        'https://images.unsplash.com/photo-1460380410874-537ecece3984?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80',
        'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80',
        'https://images.unsplash.com/photo-1502307837336-d59cca9408a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80',
        'https://images.unsplash.com/photo-1475856500583-7322284f2131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80',
        'https://images.unsplash.com/photo-1475474369946-72bb667aae19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80',
        'https://images.unsplash.com/photo-1469533778471-92a68acc3633?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80',
        'https://images.unsplash.com/photo-1499639074945-fd03f7b1a09e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80',
      ]
    }
  }

  render() {

    return (
      <div className='center'>
        <p className='score center-align white-text flow-text'>Session Score: {this.props.score} / 10</p>
<<<<<<< HEAD
        <img src={this.state.pieImage[this.props.score]} alt='pie-progress pic' />
      </div>
=======
        <img src={this.state.pieImage[this.props.score]} alt='pie-progress pic'/>
     </div>
>>>>>>> bc6ec5bf161a4bd852b0cef6924a53eec7645c6f
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
