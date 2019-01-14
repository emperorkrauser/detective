import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.scss';
import PictureContainer from "./components/picture-container";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
                  
        </header>
        <div className="main-content">
        	<div className="grid-container">
        		{this.props.children}
        	</div>
        </div>
        <footer></footer>
      </div>
    );
  }
}

export default App;
