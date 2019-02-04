import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';
import { registerUser, registerError } from '../actions/users';
import { login } from '../actions/auth';
import Input from './input';
import { required, nonEmpty, matches, length, isTrimmed } from '../validators';
import { connect } from 'react-dom';

const passwordLength = length({ min: 10, max: 72 });
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            message : null,
            submitted : false,
            hasError: null,
        }
    }
    onSubmit(values) {
        this.setState({submitted:true})
        const { username, password, firstName, lastName } = values;
        const user = { username, password, firstName, lastName };
        return this.props.dispatch(registerUser(user))
        .then(other=>{
         })
            .catch(err=>{
                this.setState({hasError:true})
              return this.props.dispatch(registerError(err))
            })
            .then(()=>{

                if(!this.props.parentError){

                    this.setState({message: "Register Success"})
                }
            })

    }

    render() {
        let registerBtn = (<a className="waves-effect waves-teal lighten-2 btn-flat center"
            onClick={this.props.handleSubmit(values =>
                this.onSubmit(values)
            )
            }>Register</a>)
        if (this.props.pristine || this.props.submitting) {
            registerBtn = (<a className="waves-effect waves-teal lighten-2 btn-flat center disabled">Register</a>)
        }
        let errorMessage;
        let successMessage = this.state.message;
        if (this.props.parentError) {
            errorMessage = (<p className="message message-error">{this.props.parentError.reason}</p>);
        }
        return (
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                 {errorMessage}
                 <p>{successMessage}</p>
                <label htmlFor="firstName">First name</label>
                <Field component={Input} type="text" name="firstName" />
                <label htmlFor="lastName">Last name</label>
                <Field component={Input} type="text" name="lastName" />
                <label htmlFor="username">Username</label>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                <label htmlFor="password">Password</label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    validate={[required, passwordLength, isTrimmed]}
                />
                <label htmlFor="passwordConfirm">Confirm password</label>
                <Field
                    component={Input}
                    type="password"
                    name="passwordConfirm"
                    validate={[required, nonEmpty, matchesPassword]}
                />
                <div className='center'>
                    {registerBtn}
                </div>
            </form>
        );
    }
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);
