import React from 'react';
import Login from './components/Login';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Login />
      </div>
      
      {/* <form>
        Username: <input type="text"></input>
        Passwork: <input type="text"></input>
        <button>Submit</button>
      </form> */}
    </div>
  );
}

export default App;
