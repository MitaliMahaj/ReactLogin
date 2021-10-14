import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LoginDesign from './LoginPage/LoginDesign';
import './LoginPage/LoginDesign';
import './LoginDesign.css';
import './Welcome/WelcomePage';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
import WelcomePage from './Welcome/WelcomePage';

ReactDOM.render(
  <div>  
    <Router>
    <LoginDesign />
      <Route path="/welcome" component={WelcomePage}> </Route>
    </Router>
  </div>,
  document.getElementById('root')
);

reportWebVitals();
