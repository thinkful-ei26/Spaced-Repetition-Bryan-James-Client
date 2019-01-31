import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { fetchProtectedData, countCorrect, countWrong } from '../actions/protected-data'
import Input from './input'
import { required, nonEmpty } from '../validators'
import { validateResponse } from '../actions/validate-response'
import Feedback from './feedback'

export class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            feedbackVisible: false,
            hasAnswered: false,
        }
    }
    onSubmit(userInput) {
        let objWhateverSomething = {
            id: this.props.protectedData.id,
            Answer: userInput.answer,
        }
        // Once we submit, change the state of hidden to false
        this.setState({ feedbackVisible: true, hasAnswered: true })
        return this.props.dispatch(validateResponse(objWhateverSomething))
            .then(() => {
                //here this.props.validateData has been updated
                if (this.props.validateData === 'Correct') {
                    this.props.dispatch(countCorrect({ id: this.props.protectedData.id }));
                } else {
                    this.props.dispatch(countWrong({ id: this.props.protectedData.id }));
                }
            });

    }
    onNext() {
        let objSomethingWhatever = {
            nextQuestionIndex: this.props.protectedData.next,
        }
        this.setState({ feedbackVisible: false, hasAnswered: false })
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
                        disabled={this.props.pristine || this.props.submitting || this.state.hasAnswered}>
                        Submit
                    </button>
                </form>
                {/* <button type='button' onClick={() => this.onNext()}>
                    Next
                </button> */}
                <a className="waves-effect waves-teal lighten-2 btn-flat" onClick={() => this.onNext()}>Next</a>
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
