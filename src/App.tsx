import React, { useEffect } from 'react';
import logo from './assets/images/logo.svg';
import './App.css';
import { Login } from './services/feautures/auth/AuthServices';

function App() {

  // useEffect(() => {
  //   (async function () {
  //     const data = await Login({
  //       'username':'presidente',
  //       'password':'presidente123'
  //       });
  //     //console.log('login', data);
  //   })();
  // }, [Login]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={async () => await Login({
          'username': 'presidente',
          'password': 'presidente123'
        })}>
          Activate Lasers
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
