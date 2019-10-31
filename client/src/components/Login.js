import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';
import './Login.css';


// const API = 'http://localhost:4000/users';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleChange=(event)=>{
        const name = event.target.name;
        const value = event.target.value;

        this.setState({[name]: value});
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        const un = this.state.username;
        const pw = this.state.password;
        const data = {un, pw};
        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        fetch('http://localhost:4000/login',option)
        .then(response =>{
            return response.json()
        })
        .then(data =>{
            console.log(data)
        })
    }

    render(){
        return(
            <Form className="formWrapper" onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label>Enter your Username</Form.Label>
                    <Form.Control 
                        placeholder="your username"
                        name="username"
                        value={this.state.username}
                        type="text"
                        onChange={(event)=>this.handleChange(event)} 
                        required/>
                    <Form.Text className="text-muted">
                        Username is different from your email address.
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Enter your password</Form.Label>
                    <Form.Control  
                        placeholder="your password"
                        name="password"
                        value={this.state.password}
                        type="password"
                        onChange={(event)=>this.handleChange(event)} 
                        required/>
                    <Form.Text className="text-muted">
                        We'll never spill the beans.
                    </Form.Text>
                </Form.Group>
                <Button variant="outline-primary" className="signInBtn" type="submit">Sign In</Button>
                <Link to="/signup">
                        <Button variant="outline-primary" className="signUpBtn" >Sign Up</Button>
                </Link>
            </Form>
        );
    }
}

export default Login;