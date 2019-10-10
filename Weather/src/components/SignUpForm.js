import React from 'react';

class SignUpForm extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }

        this.changeUsername = this.changeUsername.bind(this);
        this.changePassword = this.changePassword.bind(this);
    }

    changeUsername(e){
        this.setState({
            username: e.target.value
        })
    }   

    changePassword(e){
        this.setState({
            password: e.target.value
        })
    } 

    changeInput = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleUpdate = (e) =>{
        e.preventDefault();
        this.setState({
            username: '',
            password: ''
        })
    }
    
    render() {
        const { username,password } = this.state;
        return(<div>
            <form>
                <div>
                    <label>username</label>
                    <input type="text" id="username" value={username} onChange={this.changeUsername}/>
                </div>
                <div>
                    <label>password</label>
                    <input type="text" id="password" value={password} onChange={this.changePassword}/>
                </div> 
                <button onClick={this.handleUpdate}>submit</button>   
            </form>    
        </div> );
    }
}

export default SignUpForm;