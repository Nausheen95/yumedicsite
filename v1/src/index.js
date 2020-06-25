import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
//import Login from './Login';
import App from './App';

import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';




ReactDOM.render(
  <BrowserRouter>
<App />
</BrowserRouter>,
 document.getElementById('root'));


    
  



serviceWorker.unregister();
