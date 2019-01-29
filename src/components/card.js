import React, { Component } from 'react'
import { Field, reduxForm, focus } from 'redux-form'
import { fetchProtectedData } from '../actions/protected-data'

export default class Card extends Component {
    onSubmit(question) {
        return this.props.dispatch(fetchProtectedData(question))
    }
    render() {
        return (
            <div className='question card'>
                <div className='question component'>
                    {this.props.protectedData.question}
                </div>
                <div className='answer component'>
                    {this.props.protectedData.answer}
                </div>
                <form
                    className='answer-form'
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}>
                    <label htmlFor='answer'>Answer</label>
                    <Field
                        component={Input}
                        type='text'
                        name='answer'
                        id='answer'
                        validate={[required, nonEmpty]}
                    />
                </form>
                <div className='input component' />
            </div>
        )
    }
}
