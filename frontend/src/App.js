import React from 'react';
import './App.css';
import { Cookies } from 'react-cookie';
import Logon from './components/logon.js';
import Title from './components/title.js';
import Video from './components/video.js';

import titlePic from'./assets/miguels.jpg';
import nextPic from'./assets/sic_pitch.jpg';

function App() {

  var cookies = new Cookies();
  var logon = cookies.get('web-test-logon');

  if( !logon ) {
    return (
      <div className="App">
        <Title/>
        <Video title="Why we don't have Free Will & Why that's OK" url="https://www.youtube.com/embed/o0GN4urbA_c"/>
        <Video title="The Story of Fat: Why we were Wrong about Health" url="https://www.youtube.com/embed/5S6-v37nOtY"/>
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
