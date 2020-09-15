import React from 'react'
import Categories from './Categories'
import { Switch, Route } from 'react-router-dom'
import Playlist from './pages/Playlist'
import left from '../svgs/leftbutton.svg'
import right from '../svgs/rightbutton.svg'

const Main = () => {
    return (<div className="main">
        <div className="upperNav">
            <div className="arrows">
                <img src={left} />
                <img src={right} />
            </div>
        </div>

        <div className="mainContent">
            <Switch>
                <Route path="/" exact component={Categories}></Route>
                <Route path="/search">Search</Route>
                <Route path="/your-library">Your Library</Route>
                <Route path="/playlist/:id" component={Playlist}></Route>

            </Switch>





        </div>


    </div>
    )
}

export default Main