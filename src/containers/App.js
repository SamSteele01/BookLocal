import React, { Component } from 'react';
import '../styles/App.css';
import Header from '../components/Header';
import Logo from '../components/Logo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Logo/>
      </div>
    );
  }
}

export default App;
