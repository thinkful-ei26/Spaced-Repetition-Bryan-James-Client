import React, { Component } from 'react'

export default class Feedback extends Component {
    render() {
        return this.props.data && this.props.feedbackVisible ? (
            <div className='feedback center-align text-red'>{this.props.data}</div>
        ) : (
                <div className='feedback' />
            )
    }
}
