import React, { Component } from 'react';
import api from "../../utils/auth";

class TestLogin extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
    };
  }

  componentWillMount() {
    const token = window.localStorage.getItem(`recipes`);
    this.setState({ token });
  }

  auth = async () => {
    const auth = this.state.token;
    if (auth) {
      console.log(`Logging out...`);
      window.localStorage.removeItem(`live`);
      this.setState({ token: null });
    } else {
      console.log(`Logging in...`);
      const { data } = await api.post(`/login`, {
        // Set credentials from your seeded database
        email: `ok@roizvav.tt`,
        password: `hIZmGCd#`,
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
    // return (
    //   this.state.token
    //     ?
    //       <div>
    //     yah
    //         <button onClick={this.logout}>Logout</button>
    //       </div>

    //     :
    //       <div>
    //     nah
    //       </div>
    // );

    const auth = !!this.state.token;
    console.log(this.state.token);

    return (
      <button onClick={this.auth}>{auth ? `Logout` : `Login`}</button>

    );
  }
}

export default TestLogin;
