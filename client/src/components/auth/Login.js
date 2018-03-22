// import React from 'react';

// const Login = () => (
//     <div>
//         <h1>Login</h1>
//     </div>
// );

// export default Login;

import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  async login() {
    console.log(`pressed`);
    const { data } = await axios.post(`http://localhost:4001/login`, {
      email: `iboric@bilmujas.zw`,
      password: `GjTl9^6TifQ3%!W`,
    });
    await window.localStorage.setItem(`live`, data.token);
    await console.log(data.token);
  }
  render() {
    return (
      <div>
        <button onClick={this.login}>Login</button>
      </div>
    );
  }
}

export default Login;
