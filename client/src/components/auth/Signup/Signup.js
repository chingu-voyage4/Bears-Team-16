import React from 'react';
import './Signup.css'

class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            emailValue: '',
            passwordValue: '',
            error: true
        }
        this.validateEmail = this.validateEmail.bind(this)
        this.validatePassword = this.validatePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    validateEmail(e) {
        let val = e.target.value
        this.setState({ emailValue: val })
        let regex = /^\w[\w\d-]+@(\w[\w\d_.+-]+\.[\w]{2,20})/
        if (regex.test(val)) {
           this.setState({
               error: false
           })
        }
    }

    validatePassword(e) {
        let val = e.target.value
        this.setState({ passwordValue: val })
        let regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z])(.{8,20})/
        if (regex.test(val)) {
            this.setState({
                error: false
            })
        }
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.state.error) {
            alert('error')
        }
    }

    render() {
        return (
            <div className='sign-up-wrapper'>
                <form className='sign-up-inner'
                      onSubmit={this.onSubmit}
                >
                    <input type='text'
                           value={this.state.emailValue}
                           placeholder='Email'
                           onChange={this.validateEmail}
                    />
                    <input type='password'
                           value={this.state.passwordValue}
                           placeholder='Password'
                           onChange={this.validatePassword}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Signup;
