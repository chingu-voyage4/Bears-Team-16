import React, { Component } from 'react';
import api from "../../utils/auth";
import { decodeToken } from "../../utils/jwt";

/* eslint-disable react/no-multi-comp */
class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ``,
    };
  }

  componentWillMount() {
    this.setState({ value: this.props.value || `` });
  }

  onChange = ({ target: { value } }) => {
    this.props.onChange(value);
    this.setState({ value });
  }

  render() {
    return (
      <div>
        <input
          style={{
          width: `300px`,
          padding: `20px`,
          boxSizing: `border-box`,
          fontSize: `20px`,
        }}
          type="text"
          value={this.state.value}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

class TestLogin extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
      user: null,
      message: ``,
      email: `mail@mail.com`,
      password: `12354`,
      passwordConfirm: ``,
      signin: false, // false for login method, true for sign up method
    };
  }

  componentWillMount() {
    const token = window.localStorage.getItem(`recipes`);
    const user = decodeToken(token);
    // Check token expiration date
    if (token && user.exp < Date.now() / 1000) {
      console.log(`Removing token`);

      window.localStorage.removeItem(`recipes`); // Remove expired token
    } else {
      this.setState({
        token,
        user, // Decode token at any time to get the payload (user object)
      });
    }
  }

  onSubmit = async e => {
    e.preventDefault();

    const auth = this.state.token;
    if (auth) {
      console.log(`Logging out...`);
      window.localStorage.removeItem(`recipes`); // Remove token on logout
      this.setState({
        token: null,
        user: null, // Clear store on logout
        signin: false,
        message: ``,
      });
    } else {
      console.log(`Logging in ${this.state.email} with ${this.state.password}`);
      try {
        const { data } = await api.post(
          this.state.signin ? `/register` : `/login`, // Switches between /login and /register
          {
            // Reseed database OR use credentials from your seeds
            email: this.state.email,
            password: this.state.password,
          },
        );

        // If valid user and token returned
        if (data.token) {
          console.log(`Success. Setting token`);
          window.localStorage.setItem(`recipes`, data.token);
          // Set user to store on login
          this.setState({
            token: data.token,
            user: decodeToken(data.token),
            signin: false,
            message: ``,
          });
        } else {
          this.setState({ message: `Incorrect credentials.` });
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  render() {
    const { state } = this;
    let btnLbl = ``;
    if (this.state.token) btnLbl = `Logout`;
    else if (this.state.signin) btnLbl = `Register`;
    else btnLbl = `Login`;

    return (
      <div
        style={{
          marginTop: `20px`,
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
          <form onSubmit={e => this.onSubmit(e)}>
            <Input value="mail@mail.com" onChange={email => this.setState({ email })} />
            <Input value="12354" onChange={password => this.setState({ password })} />
            {state.signin && <Input onChange={val => this.setState({ passwordConfirm: val })} />}
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
            <p style={{ display: `inline` }}>{`${state.message}. `}</p>
            <button
              type="button" // Makes the button not submitthe form
              style={{
                    display: `inline`,
                    fontWeight: `700`,
                    background: `none`,
                    border: `none`,
                    fontSize: `20px`,
                  }}
              onClick={() => this.setState({
                    signin: !state.signin,
                    message: state.signin ? `` : `I want to `,
                  })}
            >
              {state.signin ? `Login` : `Sign up?`}
            </button>
          </div>
            )}
          {state.token &&
            <div style={{ width: `300px` }}>

              <p style={{ fontSize: `20px` }}>
                {`Hello ${state.user.fname}.`}
              </p>
              <p>
                {`Token expires at ${new Date(state.user.exp * 1000)}`}
              </p>
            </div>}
        </div>
      </div>
    );
  }
}

export default TestLogin;
