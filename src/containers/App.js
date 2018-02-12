import React, { Component } from 'react';
import '../styles/App.css';
import 'grommet/grommet.min.css'; //vanilla styles
import Header from '../components/Header';
import Logo from '../components/Logo';
import Hero from '../components/Hero';
import What from './what/What';
import Why from './why/Why';
import Who from './who/Who';
import How from './how/How';
import Steps from './Steps';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Logo/>
        <Hero image="blockchain"/>
        <What/>
        <Why/>
        <Who/>
        <How/>
        <Hero image="exchange-building"/>
        <Steps/>
      </div>
    );
  }
}

export default App;
