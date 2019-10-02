import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';
import './Login.css';

class Login extends Component{
    render(){
        return(
           <Form className="formWrapper">
               <Form.Group>
                   <Form.Label>Enter your Username</Form.Label>
                   <Form.Control placeholder="your username"/>
                   <Form.Text className="text-muted">
                       Username is different from your email address.
                   </Form.Text>
               </Form.Group>

               <Form.Group>
                   <Form.Label>Enter your password</Form.Label>
                   <Form.Control type="password" placeholder="your password"/>
                   <Form.Text className="text-muted">
                       We'll never spill the beans.
                   </Form.Text>
               </Form.Group>

               <Button variant="outline-primary" className="btn">Sign In</Button>
               <Link to="/signup">
                    <Button variant="outline-primary" className="btn" >Sign Up</Button>
               </Link>
               
           </Form> 
        );
    }
}

export default Login;