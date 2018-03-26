import React, { Component } from 'react';
import api from "../../utils/auth";
import { decodeToken } from "../../utils/jwt";

class TestLogin extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
      user: null,
    };

    this.auth = this.auth.bind(this);
  }

  componentWillMount() {
    const token = window.localStorage.getItem(`recipes`);
    this.setState({
      token,
      user: decodeToken(token), // Decode token at any time to get the payload (user object)
    });
  }

  async auth() {
    const auth = this.state.token;
    if (auth) {
      console.log(`Logging out...`);
      window.localStorage.removeItem(`recipes`); // Remove token on logout
      this.setState({
        token: null,
        user: null, // Clear store on logout
      });
    } else {
      console.log(`Logging in...`);
      try {
        const { data } = await api.post(`/login`, {
        // Reseed database OR use credentials from your seeds
          email: `mail@mail.com`,
          password: `12354`,
        });

        // If valid user and token returned
        if (data.user) {
          console.log(`Success. Setting token`);
          window.localStorage.setItem(`recipes`, data.token);
          // Set user to store on login
          this.setState({ token: data.token, user: data.user });
        } else {
          console.log(`Login failed: `, data.message);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  render() {
    const auth = !!this.state.token;

    return (
      <div>
        <button onClick={this.auth}>{auth ? `Logout` : `Login`}</button>
        {auth && <div>{`Hello ${this.state.user.fname}`}</div>}
      </div>
    );
  }
}

export default TestLogin;
