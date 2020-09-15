import React from 'react';
import './App.scss';
import Nav from './Components/Nav'
import Main from './Components/Main'
import Footer from './Components/Footer'

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
      <Footer/>
    </div>
  );
}

export default App;
