import React from 'react';
import './Signup.css'

class Signup extends React.Component{
    render(){
        return(
            <div className='sign-up-wrapper'>
                <div className='sign-up-inner'>
                <input type='text' placeholder='Email'/>
                <input type='password' placeholder='Password' />
                </div>
            </div>
        )
    }
}
export default Signup;
