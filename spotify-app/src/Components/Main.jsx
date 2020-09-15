import React from 'react'
// import { ReactComponent as PlayIcon } from '../svgs/play.svg'
import Categories from './Categories'
import {Switch, Route} from 'react-router-dom'
import Playlist from './pages/Playlist'
import left from '../svgs/leftbutton.svg'
import right from '../svgs/rightbutton.svg'

const Main = () => {
    return ( <div className="main">
        <div className="upperNav">
        <div className="arrows">
        <a href ="/"><img src={left} /></a>
        <a href ="#"><img src={right} /></a>
        </div>
        </div>

        <div className="mainContent">
            <Switch>
                <Route path="/" exact component={Categories}></Route>
                    <Route path="/search">Search</Route>
                    <Route path="/your-library">Your Library</Route>
                    <Route path="/playlist/:id" component={Playlist}></Route>
                
            </Switch>
            {/* <Categories /> */}
            

            

        </div>


    </div>
    )
}

export default Main