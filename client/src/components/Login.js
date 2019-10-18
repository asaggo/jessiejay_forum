import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';
import axios from 'axios';
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
        // console.log('username from the form: ', this.state.username);
        const data = { 'username': `${this.state.username}`};

        try{
            const response = fetch('http://localhost:4000/login',{
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({username: this.state.username})
            })
            .then(function(){
                const json = response.json();
                console.log('Success: ', JSON.stringify(json));
            })
            
        }catch(err){
            console.log(err);
        }

    }

    render(){
        return(
            <Form className="formWrapper" onSubmit={this.handleSubmit} method="post">
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