import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { fetchProtectedData } from '../actions/protected-data'
import Input from './input'
import { required, nonEmpty } from '../validators'
import { validateResponse } from '../actions/validate-response'
import Feedback from './feedback'

export class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            feedbackVisible: false,
        }
    }
    onSubmit(userInput) {
        let objWhateverSomething = {
            Question: this.props.protectedData.Question,
            Answer: userInput.answer,
        }
        // Once we submit, change the state of hidden to false
        this.setState({ feedbackVisible: true })
        return this.props.dispatch(validateResponse(objWhateverSomething))
        // return this.props.dispatch(queryServerToValidateAnswer(user answer))
    }
    onNext() {
        let objSomethingWhatever = {
            Question: this.props.protectedData.Question,
        }
        this.setState({ feedbackVisible: false })
        return this.props.dispatch(fetchProtectedData(objSomethingWhatever))
    }
    render() {
        return (
            <div className='question card'>
                <div className='question component'>
                    Question:
                    {this.props.protectedData.Question}
                </div>
                <div className='answer component'>
                    This should be hidden from the user and contain the answer
                    to the question.
                    {this.props.protectedData.Answer}
                </div>
                <Feedback data={this.props.validateData} feedbackVisible={this.state.feedbackVisible} />
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
                <button type='button' onClick={() => this.onNext()}>
                    Next
                </button>
                <div className='input component' />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return ({
        validateData: state.validateResponse.data,
    })
}

export default reduxForm({
    form: 'userResponse',
})(connect(mapStateToProps)(Card))
