import React, { Component } from 'react';

class TestLogin extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
    };
  }
  componentDidMount() {
    const token = window.localStorage.getItem(`live`);
    this.setState({
      token,
    });
  }
  logout() {
    window.localStorage.removeItem(`live`);
  }
  render() {
    return (
      this.state.token
        ?
          <div>
        yah
            <button onClick={this.logout}>Logout</button>
          </div>

        :
          <div>
        nah
          </div>
    );
  }
}

export default TestLogin;
