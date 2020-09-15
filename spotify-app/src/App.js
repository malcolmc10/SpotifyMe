import React from 'react';
import './App.scss';
import Nav from './Components/Nav'
import Main from './Components/Main'
import Footer from './Components/Footer'
import { ReactComponent as PlayIcon } from './svgs/play.svg'
import { ReactComponent as Pause } from './svgs/pause.svg'
import { ReactComponent as Left } from './svgs/left.svg'
import { ReactComponent as Right } from './svgs/right.svg'

function App() {
  return (
    <div className="outerWrap">
      <div className="App">
        <Nav />
        <Main />
      </div>
      <div className="musicControl">
        <PlayIcon/>
        <Pause/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
