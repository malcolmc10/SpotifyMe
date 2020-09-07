import React from 'react';
import './App.scss';
import Nav from './Components/Nav'
import Main from './Components/Main'

function App () {
  return (
    <div className="outerWrap">
      <div className="App">
        <Nav />
        <Main />
      </div>
      <div className="musicControl">
        music controls
      </div>
    </div>
  );
}

export default App;
