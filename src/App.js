import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './navbar/index'
import brand from './logo.png'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar locations={[
        {
          text:'Home',
          id: 'home'
        },
        {
          text: 'About',
          id:"about"
        },
        {
          text: 'Contact',
          id:"contact"
        },
        {
          text:'Home2',
          id: 'home2'
        },
        {
          text: 'About2',
          id:"about2"
        },
        {
          text: 'Contact2',
          id:"contact2"
        }

      ]} brandIcon={brand} backgroundColorActive={'white'} ></Navbar>
        <img src={logo} className="App-logo" alt="logo" />
        <div id="home" style={{
          height: '100vh',
          width: '100%',
          background: 'yellow'
        }}>
          home
        </div>
        <div id="about" style={{
          height: '100vh',
          width: '100%',
          background: 'red'
        }}>
          about
        </div>
        <div id="contact" style={{
          height: '100vh',
          width: '100%',
          background: 'blue'
        }}>
          contact
        </div>
        <div id="home2" style={{
          height: '100vh',
          width: '100%',
          background: 'yellow'
        }}>
          home
        </div>
        <div id="about2" style={{
          height: '100vh',
          width: '100%',
          background: 'red'
        }}>
          about
        </div>
        <div id="contact2" style={{
          height: '100vh',
          width: '100%',
          background: 'blue'
        }}>
          contact
        </div>
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
