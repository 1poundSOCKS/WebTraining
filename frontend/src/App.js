import React from 'react';
import './App.css';
import { Cookies } from 'react-cookie';
import Logon from './components/logon.js';

import titlePic from'./assets/miguels.jpg';

function App() {

  var cookies = new Cookies();
  var logon = cookies.get('web-test-logon');

  if( !logon ) {
    return (
      <div className="App">
        <h1>Red River Gorge</h1>
        <p1>
        <img src={titlePic} alt=""/>
        </p1>
      </div>
    );
  }
  else {
    return (
      <div className="App">
        <h1>Web Test</h1>
      </div>
    );
  }
}

export default App;
