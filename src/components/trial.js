import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Trial extends Component {
  render() {
    return (
      <div className="trial link">
        Text
        <Link to='/'>Back to Home!</Link>
      </div>
    )
  }
}
