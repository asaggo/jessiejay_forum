import React from 'react';
import Login from './components/Login';
import Signup from './components/SignUp';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="wrapper">
          <Route exact path="/" component={Login}/> 
          <Route path="/signup" component={Signup}/> 
        </div>
      </Router>
    </div>
  );
}

export default App;
