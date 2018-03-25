import React, { Component } from 'react';
import api from "../../utils/auth";

class TestLogin extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
    };

    this.auth = this.auth.bind(this);
  }

  componentWillMount() {
    const token = window.localStorage.getItem(`recipes`);
    this.setState({ token });
  }

  async auth() {
    const auth = this.state.token;
    if (auth) {
      console.log(`Logging out...`);
      window.localStorage.removeItem(`recipes`);
      this.setState({ token: null });
    } else {
      console.log(`Logging in...`);
      const { data } = await api.post(`/login`, {
        // Reseed database OR use credentials from your seeds
        email: `mail@mail.com`,
        password: `12354`,
      });

      // If valid user returned
      if (data) {
        console.log(`Success. Setting token`);
        window.localStorage.setItem(`recipes`, data.token);
        this.setState({ token: data.token });
      } else {
        console.log(`Login failed: `, data.errors);
      }
    }
  }

  render() {
    const auth = !!this.state.token;
    console.log(this.state.token);

    return (
      <div>
        <h3>{auth ? `Token found` : `No token found`}</h3>
        <button onClick={this.auth}>{auth ? `Logout` : `Login`}</button>
      </div>
    );
  }
}

export default TestLogin;
