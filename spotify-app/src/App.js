import React from 'react';
import './App.scss';
import Nav from './Components/Nav'
import Main from './Components/Main'
import Footer from './Components/Footer'
import { ReactComponent as PlayButt } from './svgs/musicplay.svg'
import { ReactComponent as Pause } from './svgs/pause.svg'
import { ReactComponent as Left } from './svgs/leftbutton.svg'
import { ReactComponent as Right } from './svgs/rightbutton.svg'
import { ReactComponent as Shuffle } from './svgs/change.svg'
import { ReactComponent as Replay } from './svgs/replay.svg'

function App() {
  return (
    <div className="outerWrap">
      <div className="App">
        <Nav />
        <Main />
      </div>
      <div className="musicControl">
        <Shuffle className="shuffle"/>
        <Left className="leftButton"/>
        <PlayButt className="firestick"/>
        <Pause className="pauseButt"/>
        <Right className="rightButton"/>
        <Replay className="replay"/>
        
        
        <div className="line"></div>
        
        
      </div>

      <Footer />
    </div>
  );
}

export default App;
