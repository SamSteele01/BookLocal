import React, { Component } from 'react';
import '../styles/App.css';
import 'grommet/grommet.min.css'; //vanilla styles
import Header from '../components/Header';
import Logo from '../components/Logo';
import Jumbotron from '../components/Jumbotron';
import What from './what/What';
import Why from './why/Why';
import Who from './who/Who';
import How from './how/How';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Logo/>
        <Jumbotron/>
        <What/>
        <Why/>
        <Who/>
        <How/>
      </div>
    );
  }
}

export default App;
