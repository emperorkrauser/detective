import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from "./components/home";
import Game from "./components/picture-container";
import UploadPicture from "./components/picture-upload";

ReactDOM.render(
  <Router>
    <Switch>
      <App>
        <Route exact path="/" component={Home}/>
        <Route path="/game" component={Game}/>
        <Route path="/upload" component={UploadPicture}/>
      </App>
    </Switch>
  </Router>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
