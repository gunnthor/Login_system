import React from 'react';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: props.email ? props.email : '',
      emailConfirm: props.emailConfirm ? props.emailConfirm : '',
      password: props.password ? props.password : '',
      passwordConfirm : props.passwordConfirm ? props.passwordConfirm : '',
      formStatus: false
    };
  }

  onEmailChange = (e) => {
    const email = e.target.value;
    this.setState(() => ({ email }));
    console.log(this.state.email);
  };

  onEmailConfirmChange = (e) => {
    const emailConfirm = e.target.value;
    this.setState(() => ({ emailConfirm }));
    console.log(this.state.emailConfirm);
  };

  render (){
    return (
      <div>
        <p> Email: </p>
        <input 
          type="text"
          autoFocus
          value={this.state.email}
          onChange={this.onEmailChange}
        />
        <p> Repeat Email: </p>
        <input
          type="text"
          value={this.state.emailConfirm}
          onChange={this.onEmailConfirmChange}
        />
        <p> Password: </p>
        <input type="password"/>
        <p> Repeat Password: </p>
        <input type="password"/>
      </div>
    )
  }
}