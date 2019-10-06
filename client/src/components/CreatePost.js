import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './CreatePost.css';

class CreatePost extends Component{
    submitHandler=()=>{
        this.props.history.push('/main');
    }
    render(){
        return(
            <Form className="createPostFormWrapper" onSubmit={this.submitHandler}>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Your post title" required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Content</Form.Label>
                    <Form.Control as="textarea" rows="10" placeholder="Content detail" required/>
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
}

export default CreatePost;
