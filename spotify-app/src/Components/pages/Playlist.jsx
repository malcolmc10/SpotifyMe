import React from 'react';
import { useParams } from 'react-router-dom'
import { ReactComponent as PlayIcon } from '../../svgs/play.svg'
import {ReactComponent as Heart} from '../../svgs/heart.svg'

const Playlist = () => {

    let { id } = useParams()



    return (
        <div className="playlistPage">
            <div className="mainInner">
                <div className="playlistPageInfo">
                    <div className="playlistPageImage">
                        <img src="https://images.unsplash.com/photo-1536430380482-2dc009b8dd36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" alt="test2" />
                    </div>

                    <div className="playlistPageContent">
                        <p className="smallText uppercase bold">Playlist</p>
                        <h1>Stargazing</h1>
                        <p className="tagline">Intergalactic, so Fantastic make you just go Woo Woo.</p>
                        <div className="playlistPageDesc">
                        <span className="spotify">Spotify</span>
                        <span className="span1">251,990 likes</span>
                        <span className="span1">3 hr 20 min</span>
                        
                        
                        </div>


                    </div>

                </div>



                <div className="playlistPageSongs">
                    <div className="playlistButtons">
                        
                        <span className="playIcon"><PlayIcon/></span>
                    
                    <div className="icons">
                        <div className="iconsHeart">
                        <Heart/>
                        </div>
                        <div className="iconsDots">...</div>

                    </div>

                    </div>
                    
                    <ul>
                        <li>Song 1</li>
                        <li>Song 2</li>
                        <li>Song 3</li>
                        <li>Song 4</li>
                        <li>Song 5</li>




                    </ul>




                </div>
            </div>

        </div>
    )
}

export default Playlist