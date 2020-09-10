import React from 'react'
// import { ReactComponent as PlayIcon } from '../svgs/play.svg'
import Categories from './Categories'
import {Switch, Route} from 'react-router-dom'

const Main = () => {
    return ( <div className="main">
        <div className="upperNav">
            double check text
        </div>

        <div className="mainContent">
            <Switch>
                <Route path="/" exact component={Categories}></Route>
                    <Route path="/search">Search</Route>
                    <Route path="/your-library">Your Library</Route>
                
            </Switch>
            {/* <Categories /> */}
            

            

        </div>


    </div>
    )
}

export default Main