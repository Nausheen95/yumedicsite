import React,{Component} from 'react';
import './signup.css';
//import logom  from '../logom.png';
 


class Signup extends Component{
    render(){
        return (
            <div className="container">
                <h1> SIGN UP</h1>
                <form action="#" method="post">
                <div className="col">
                    <a href="www.facebook.com" className="fb btnn">
                    <i className="fa fa-facebook fa-fw"></i> Login with Facebook
                    </a>
                    <a href="www.twitter.com" className="twitter btnn">
                    <i className="fa fa-twitter fa-fw"></i> Login with Twitter
                    </a>
                    <a href="www.google.com" className="google btnn"><i className="fa fa-google fa-fw">
                    </i> Login with Google+
                     </a>  
                 </div>
                 
                 <hr/>
                 <div className="">
                    <span class="vl-innertext">or</span>
                </div>
                <br/>

                    <div className="tbox">
                        <input type= "text" placeholder="username" />
                          
                    </div>
                    <div className="tbox">
                        <input type="text" placeholder="email id" />
                    </div>
                    <div className="tbox">
                        <input type="password" placeholder="password" />
                    </div>

                    <input className="btn" type="submit" name="" value="SIGNUP"/>
                </form>
                 
            </div>
            
        );
        
    }
} 

export default Signup;