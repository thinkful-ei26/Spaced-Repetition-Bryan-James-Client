import React from 'react'
import { Field, reduxForm, focus } from 'redux-form'
import Input from './input'
import { login } from '../actions/auth'
import { required, nonEmpty } from '../validators'

export class LoginForm extends React.Component {
  onSubmit(values) {
    return this.props.dispatch(login(values.username, values.password))
  }

  render() {
    let loginBtn = (
      <a
        href='#login'
        className='waves-effect waves-teal lighten-2 btn-flat center'
        onClick={this.props.handleSubmit(values => this.onSubmit(values))}>
        Login
      </a>
    )
    if (this.props.pristine || this.props.submitting) {
      loginBtn = (
        <a href='#login' className='waves-effect waves-teal lighten-2 btn-flat center disabled'>
          Login
        </a>
      )
    }
    let error
    if (this.props.error) {
      error = (
        <div className='form-error' aria-live='polite'>
          {this.props.error}
        </div>
      )
    }
    return (
      <form className='login-form' onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        {error}
        <label htmlFor='username'>Username</label>
        <Field component={Input} type='text' name='username' id='username' validate={[required, nonEmpty]} />
        <label htmlFor='password'>Password</label>
        <Field component={Input} type='password' name='password' id='password' validate={[required, nonEmpty]} />
        <div className='center'>{loginBtn}</div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username')),
})(LoginForm)
// handleSubmit is defined in redux-form
