import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './navbar/index'
import brand from './logo.png'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar locations={[]} brandIcon={brand} backgroundColorSecondary={'blue'}></Navbar>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
