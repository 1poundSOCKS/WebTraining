import React from 'react';
import './App.css';
import { Cookies } from 'react-cookie';
import Logon from './components/logon.js';

function App() {

  var cookies = new Cookies();
  var logon = cookies.get('web-test-logon');

  if( !logon ) {
    return (
      <div className="App">
        <h1>Web Test</h1>
            <Logon/>
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
