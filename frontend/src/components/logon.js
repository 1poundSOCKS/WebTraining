import React from 'react';
import './logon.css';

function LogonUser() {
}

function Logon() {
  return (
    <div>
      <h1>Logon</h1>
      <p>Username <input type="text" name="username"></input><br/></p>
      <p>Password <input type="text" name="password"></input><br/></p>
      <p class="button">
      <input type="submit" value="Logon" onSubmit={LogonUser}></input>
      </p>
    </div>
  );
}

export default Logon;
