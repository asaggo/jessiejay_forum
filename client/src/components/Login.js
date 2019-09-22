import React, {Component} from 'react';
import Button from 'antd/es/button';

import './Login.css';

class Login extends Component{
    render(){
        return(
            <div>
                <Button type="primary">Sign In</Button>
                <Button type="primary">Sign Up</Button>
            </div>
        );
    }
}

export default Login;