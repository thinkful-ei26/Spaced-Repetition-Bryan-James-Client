import React, { Component } from 'react'

export default class Feedback extends Component {
    render() {
        console.log(this.props)
        return this.props.data && this.props.feedbackVisible ? (
            <div className='feedback'>{this.props.data}</div>
        ) : (
                <div className='feedback' />
            )
    }
}
