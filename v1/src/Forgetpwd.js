 import React,{Component} from 'react';
import './login.css';
class Forgetpwd extends Component{
    render(){
        return (
            
            <div className="container">
                <h1> FORGET PASSWORD</h1>
                <form action="index.html" method="post">
                    <div className="tbox">
                        <input type= "text" placeholder="email id" />
                    </div>
                    <div className="tbox">
                        <input type="password" placeholder="new password" />
                    </div>
                    <input className="btn" type="submit" name="" value="SUBMIT"/>
                </form>       
            </div>
        );  
    }
} 
export default Forgetpwd;