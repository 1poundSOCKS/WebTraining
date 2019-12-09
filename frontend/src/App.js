import React from 'react';
import './App.css';
import { Cookies } from 'react-cookie';
import Logon from './components/logon.js';

import titlePic from'./assets/miguels.jpg';
import nextPic from'./assets/sic_pitch.jpg';

function App() {

  var cookies = new Cookies();
  var logon = cookies.get('web-test-logon');

  if( !logon ) {
    return (
      <div className="App">
        <p1>
        <h1>Why we don't have Free Will & Why that's OK</h1>
        <iframe title="Why we don't have Free Will & Why that's OK" width="100%" height="315" src="https://www.youtube.com/embed/o0GN4urbA_c"></iframe>
        <h1>The Story of Fat: Why we were Wrong about Health</h1>
        <iframe title="The Story of Fat: Why we were Wrong about Health" width="100%" height="315" src="https://www.youtube.com/embed/5S6-v37nOtY"></iframe>
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
