import React from 'react';
import './App.scss';
import Nav from './Components/Nav'


function App() {
  return (
    <div className="outerWrap">
      <div className="App">
        <Nav />
      </div>
      <div className="musicControl">
        music controls
      </div>
    </div>
  );
}

export default App;
