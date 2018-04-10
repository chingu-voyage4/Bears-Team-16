/* eslint-disable react/prop-types */ // FIXME temporary for deployment test

import React, { Component } from 'react';
import api from "../../utils/api";
import { UserContext } from "../Context";
// import { decodeToken } from "../../utils/jwt";

/* eslint-disable react/no-multi-comp */
const Input = props => (
  <div>
    <input
      style={{
          width: `300px`,
          padding: `20px`,
          boxSizing: `border-box`,
          fontSize: `20px`,
        }}
      placeholder={props.placeholder}
      type={props.type}
      value={props.value}
      onChange={e => props.onChange(e.target.value)}
    />
  </div>
);

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ``,
      email: ``,
      password: ``,
      passwordConfirm: ``,
      signin: false, // false for login method, true for sign up method
    };
  }

  componentWillMount() {
    // TODO If there is a token, redirect to home
    if (this.props.user) {
      this.props.history.push(`/`);
    }
  }

  onSubmit = async e => {
    e.preventDefault();

    // Attempt login
    try {
      const { data } = await api.post(
        this.state.signin ? `/register` : `/login`, // Switches between /login and /register
        {
          email: this.state.email,
          password: this.state.password,
        },
      );

      // If valid token returned
      if (data.token) {
        // Handle login and update App context, then redirect to HOME
        this.props.onLogin(data.token);
        this.props.history.push(`/`);
      } else {
        this.setState({ message: `Incorrect credentials.` });
      }
    } catch (err) {
      this.setState({
        message: `Something went wrong. Please try again.`,
      });
    }
  }

  validateEmail = email => {
    const regex = /^\w[\w\d-]+@(\w[\w\d_.+-]+\.[\w]{2,20})/;
    this.setState({
      email,
      message: (regex.test(email) || email === ``) ? `` : `Incorrect email format`,
    });
  }

  validatePassword = password => {
    const regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z])(.{8,20})/;
    this.setState({
      password,
      message: (regex.test(password) || password === ``) ? `` : `A password must contain: 
      One uppercase letter
      One lowercase letter
      One number
      One symbol.`,
    });
    // TODO Format message
  }

  validatePasswordConfirm = password => {
    this.setState({
      passwordConfirm: password,
      message: password === this.state.password ? `` : `Passwords do not match.`,
    });
  }

  render() {
    const { state } = this;
    let btnLbl = ``;
    if (this.props.user) btnLbl = `Logout`;
    else if (this.state.signin) btnLbl = `Register`;
    else btnLbl = `Login`;

    return (
      <div
        style={{
          marginTop: `120px`,
          outline: `1px black`,
          display: `flex`,
          justifyContent: `center`,
        }}
      >
        <div
          style={{
            display: `flex`,
            flexDirection: `column`,
          }}
        >
          <form onSubmit={this.onSubmit}>
            <Input
              value={state.email}
              onChange={this.validateEmail}
              type="text"
              placeholder="E-mail"
            />
            <Input
              value={state.password}
              onChange={this.validatePassword}
              type="password"
              placeholder="Password"
            />
            {state.signin &&
            <Input
              value={state.passwordConfirm}
              onChange={this.validatePasswordConfirm}
              type="password"
              placeholder="Confirm Password"
            />}
            {!(state.signin && state.passwordConfirm !== state.password) &&
              <button
                type="submit"
                style={{
                fontSize: `24px`,
                padding: `20px`,
                width: `300px`,
                border: `none`,
                backgroundColor: state.signin ? `#F27C21` : `#A0DBA2`,
              }}
              >
                {btnLbl}
              </button>}
          </form>
          {!!state.message && (
          <div style={{ textAlign: `center`, fontSize: `20px` }}>
            <p style={{
              display: `inline`,
              wordWrap: `normal`,
              maxWidth: `300px`,
}}
            >{`${state.message}. `}
            </p>
            <button
              type="button" // Makes the button not submit the form
              style={{
                    display: `inline`,
                    fontWeight: `700`,
                    background: `none`,
                    border: `none`,
                    fontSize: `20px`,
                  }}
              onClick={() => this.setState({
                    signin: !state.signin,
                    message: state.signin ? `` : `Switch to `,
                  })}
            >
              {state.signin ? `Login` : `Sign up?`}
            </button>
          </div>
            )}
        </div>
      </div>
    );
  }
}


export default props => (
  <UserContext.Consumer>
    {
      ({ user, login }) => <Signin {...props} user={user} onLogin={login} />
    }
  </UserContext.Consumer>
);

