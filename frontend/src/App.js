import React from 'react';
import './App.css';
import { Cookies } from 'react-cookie';
import Logon from './components/logon.js';

function App() {

  //var logon = Cookies.get('logon');

  return (
    <div className="App">
      <h1>Web Test</h1>
          <Logon/>
    </div>
  );
}

export default App;
