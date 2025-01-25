import React from 'react';
import './App.css';
const logo = require('./logo.png');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Jimoo Software Logo" className="App-logo" />
        <h1>Welcome to Jimoo Software</h1>
      </header>
    </div>
  );
}

export default App;
