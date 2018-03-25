import React, { Component } from 'react'

import Reserve from '../components/Reserve';
import CheckAvailable from '../components/CheckAvailable';
import GetRoomInfo from '../components/GetRoomInfo';
import Access from '../components/Access';
import Settle from '../components/Settle';

import '../styles/App.css'

class App extends Component {
  render() {


    return (
      <div className="app">
        <Reserve/>
        <Access/>
        <GetRoomInfo/>
        <CheckAvailable/>
        <Settle/>
      </div>
    );
  }
}

export default App
