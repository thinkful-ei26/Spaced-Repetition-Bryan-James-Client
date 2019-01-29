import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { fetchProtectedData } from '../actions/protected-data'
import Input from './input'
import { required, nonEmpty } from '../validators'

export class Card extends Component {
    onSubmit(question) {
        return this.props.dispatch(fetchProtectedData(null))
        // return this.props.dispatch(queryServerToValidateAnswer(user answer))
    }
    onNext(question) {
        return this.props.dispatch(fetchProtectedData(question))
    }
    render() {
        return (
            <div className='question card'>
                <div className='question component'>
                    This is where the question data from the server will be
                    rendered
                    {/* {this.props.protectedData.question} */}
                </div>
                <div className='answer component'>
                    This should be hidden from the user and contain the answer
                    to the question.
                    {/* {this.props.protectedData.answer} */}
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
                    <button
                        disabled={this.props.pristine || this.props.submitting}>
                        Submit
                    </button>
                </form>
                <div className='input component' />
            </div>
        )
    }
}

export default reduxForm({
    form: 'userResponse',
})(Card)
