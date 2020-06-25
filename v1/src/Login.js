 import React,{Component} from 'react';
import './login.css';
import {Link} from 'react-router-dom';

//import logom  from '../logom.png';
 

class Login extends Component{
    render(){
        return (
            
            <div className="container">
                

                <h1> LOGIN IN</h1>
                <form action="index.html" method="post">
                    <div className="tbox">
                        <input type= "text" placeholder="username" /> 
                    </div>
                    <div className="tbox">
                        <input type="password" placeholder="password" />
                    </div>
                    <input className="btn" type="submit" name="" value="LOG IN"/>
                </form>
                {/*<a className="a2" onClick={Signup}>Signup</a>
                <a className="a1" href="/Forgetpwd.js" >FORGET PASSWORD</a>*/}
                <br/>
                <br/><br/><br/><br/>
                <br/> <br/> 
                <br/> <br/> 
                <br/> <br/> 
                <br/> 
                <Link to="/Forgetpwd"><i className="a1"></i><span>FORGET PASSWORD</span></Link>
                <br/>
                <Link to ="/Signup"><i className="a2" ></i><span>CREATE NEW ACCOUNT</span></Link>
            </div>
        );
    }
} 
export default Login;