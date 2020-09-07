import React from 'react'
import { ReactComponent as PlayIcon } from '../svgs/play.svg'

const Main = () => {
    return <div className="main">
        <div className="upperNav">
            double check text
        </div>

        <div className="mainContent">

            <div className="cardsWrap">
                <h1> Uniquely Yours </h1>
                <div className="card">
                    <div className="cardImage">
                        <img src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="test 1" />
                    </div>
                    <div className="cardContent">
                        <h3>Liked Songs</h3>
                    </div>
                    <span className="playIcon">
                        <PlayIcon />
                    </span>
                </div>

            </div>

            <div className="cardsWrap">
                <h2> Focus </h2>
                <span className="seeAll">See All</span>
                <p className="subText">Music to motivate you</p>
                <div className="cardsWrapInner">
                    <div className="card">
                        <div className="cardImage">
                            <img src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="test 1" />
                        </div>
                        <div className="cardContent">
                            <h3>Code Jams</h3>
                            <span>Music to motivate you through any algorithm...</span>
                            
                        </div>
                        <span className="playIcon">
                            <PlayIcon />
                        </span>
                    </div>
                    
                    <div className="card">
                        <div className="cardImage">
                            <img src="https://images.unsplash.com/photo-1502872364588-894d7d6ddfab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="test 1" />
                        </div>
                        <div className="cardContent">
                            <h3>Pandemic and Chill</h3>
                            <span>Stay mellow with this selection of chill beats...</span>
                            
                        </div>
                        <span className="playIcon">
                            <PlayIcon />
                        </span>
                    </div>
                    
                    <div className="card">
                        <div className="cardImage">
                            <img src="https://images.unsplash.com/photo-1524293568345-75d62c3664f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=654&q=80" alt="test 1" />
                        </div>
                        <div className="cardContent">
                            <h3>Ultimate Standup</h3>
                            <span>Laugh till it hurts with this new collection...</span>
                            
                        </div>
                        <span className="playIcon">
                            <PlayIcon />
                        </span>
                    </div>
                    
                    <div className="card">
                        <div className="cardImage">
                            <img src="https://images.unsplash.com/photo-1590364962261-20baeb6262a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="test 1" />
                        </div>
                        <div className="cardContent">
                            <h3>Power UP Music</h3>
                            <span>Don't workout without this power set of music...</span>
                            
                        </div>
                        <span className="playIcon">
                            <PlayIcon />
                        </span>
                    </div>



                </div>
            </div>

        </div>


    </div>
}

export default Main