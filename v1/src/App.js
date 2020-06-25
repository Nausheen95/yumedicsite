import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Forgetpwd from './Forgetpwd';

//import login from '../src/components/login';

const App=()=>(
  <div>
    
    <Route path="/" exact component={Login}/>
    <Route path="/Signup" exact component={Signup} />
    <Route path="/Forgetpwd.js" exact component={Forgetpwd}/>
  </div>
)

export default App;
