import React from 'react';
import './Signup.css'

class Signup extends React.Component{
constructor(props){
    super(props)
    this.state={
        error : true
    }
}
    onChange=(e)=> {
     let val = e.target.value
       if(val.length > 0){
         this.setState({ error : false})
       }
    }

    onSubmit=(e)=> {
    e.preventDefault();
    if(this.state.error){
       alert('error')
    }
    }

    render(){
        return(
            <div className='sign-up-wrapper'>
                    <form className='sign-up-inner' onSubmit={(e)=>this.onSubmit(e)}>
                <input type='text'
                       placeholder='Email'
                       onChange={(e)=>this.onChange(e)}
                />
                <input type='password'
                       placeholder='Password'
                       onChange={(e)=>this.onChange(e)}
                />
                        <button>Submit</button>
                    </form>
                </div>
        )
    }
}
export default Signup;
