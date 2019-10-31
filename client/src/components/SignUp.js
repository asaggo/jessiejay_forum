import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './SignUp.css';

class SignUp extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: '',
            formErrors: {email: '', password: '', firstname: '', lastname: '', username: ''}, // error messages for each key
            emailValid: false,
            passwordValid: false,
            firstnameValid: false,
            lastnameValid: false,
            usernameValid: false,
            formValid: false, // true when every elements validation passes
        }
    }

    handleUserInput = event => {
        // gets field names and values from the Input field
        const name = event.target.name;
        const value = event.target.value;

        // resets the value for the name
        this.setState({ [name]: value },
                        ()=>{this.validateField(name, value)}
            );
      };

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let firstnameValid = this.state.firstnameValid;
        let lastnameValid = this.state.lastnameValid;
        let usernameValid = this.state.usernameValid;

        switch(fieldName){
            case 'email': 
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' It\'s not an email format.';
                break;

            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : 'It\'s too short. Must be longer than 6 characters.';
                break;

            case 'firstname': 
                if(value.trim().length !== 0)
                    firstnameValid = true;
                
                if(value.trim().length === 0)
                    firstnameValid = false;

                fieldValidationErrors.firstname = firstnameValid ? '' : 'Invalid first name';
                break;

            case 'lastname':
                if(value.trim().length !== 0)
                    lastnameValid = true;

                if(value.trim().length === 0)
                    lastnameValid = false;

                fieldValidationErrors.lastname = lastnameValid ? '' : 'Invalid last name';
                break;

            case 'username':
                if(value.trim().length !== 0)
                    usernameValid = true;

                if(value.trim().length === 0)
                    usernameValid = false;
                    
                fieldValidationErrors.username = usernameValid ? '' : 'Invalid user name';
                break;

            default:
                break;
        }

        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid,
            lastnameValid: lastnameValid,
            firstnameValid: firstnameValid,
            usernameValid: usernameValid
        }, this.validateForm());
    }

    validateForm(){
        this.setState({
            formValid: this.state.emailValid && this.state.passwordValid && this.state.lastnameValid
            && this.state.firstnameValid && this.state.usernameValid
        });
    }

    addUser =() =>{
        fetch(`http://localhost:4000/users/add?firstname=${this.state.firstname}&lastname=${this.state.lastname}&username=${this.state.username}&email=${this.state.email}&password=${this.state.password}`)
        .catch(err => console.error(err))
    }

    submitHandler = event =>{

        if(!this.state.formValid){
            event.preventDefault();
            event.stopPropagation();
        }
        else{
            this.addUser();
            alert("thank you for registration, " + this.state.firstname);
            this.props.history.push('/');
        }
        
        
    }

    render(){  
        // var ConditionalLink = this.state.formValid? Link: React.DOM.div; 
        return(
            <Form noValidate validated={this.state.formValid} onSubmit={this.submitHandler} className="formWrapper">
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control 
                        value = {this.state.firstname}
                        type = "text"
                        name = "firstname"
                        onChange = {(event)=>this.handleUserInput(event)}
                        required
                    />
                    <Form.Text>
                        {this.state.formErrors.firstname}
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control 
                        value = {this.state.lastname}
                        type = "text"
                        name = "lastname"
                        onChange = {(event)=>this.handleUserInput(event)}
                        required
                    />
                    <Form.Text>
                        {this.state.formErrors.lastname}
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>User Name</Form.Label>
                    <Form.Control 
                        value = {this.state.username}
                        type = "text"
                        name = "username"
                        onChange = {(event)=>this.handleUserInput(event)}
                        required
                    />
                    <Form.Text>
                        {this.state.formErrors.username}
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        value = {this.state.email} 
                        onChange = {(event)=>this.handleUserInput(event)}
                        type="text"
                        name = "email"
                        required
                    />
                    <Form.Text>
                        {this.state.formErrors.email}
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        value = {this.state.password} 
                        onChange = {(event)=>this.handleUserInput(event)}
                        type="password"
                        name = "password"
                        required
                    />
                    <Form.Text>
                        {this.state.formErrors.password}
                    </Form.Text>
                </Form.Group>
                
                <Button 
                    variant="primary" 
                    className="btn" 
                    type="submit" 
                >
                    Submit
                </Button>
            </Form>
        );
    }
};

export default SignUp;