import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.scss';
import PictureContainer from "./components/picture-container";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <PictureContainer />          
        </header>
      </div>
    );
  }
}

export default App;
