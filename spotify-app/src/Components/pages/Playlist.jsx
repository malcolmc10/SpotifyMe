import React from 'react';
import { useParams } from 'react-router-dom'

const Playlist = () => {

    let { id } = useParams()



    return (
        <div className="playlistPage">
            <div className="mainInner">
                <div className="playlistPageInfo">
                    <div className="playlistPageImage">
                        <img src="https://images.unsplash.com/photo-1574322101375-2591ed7667cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="test2" />
                    </div>

                    <div className="playlistPageContent">
                    <p className="smallText uppercase">Playlist</p> 
                    <h1>Title</h1>
                    <p>Here's some amazing music with takeover Power Hour, LET's GO!.</p>
                    <p>Spotify</p>
                    {/* <button>Play</button> */}
                    <div className="icons">
                        <div className="iconsHeart"></div>
                        <div className="iconsDots"></div>

                    </div>
                    
                </div>

                    </div>

                    

                <div className="playlistPageSongs">
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