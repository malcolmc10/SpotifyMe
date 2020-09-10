import React from 'react';
import { useParams } from 'react-router-dom'

const Playlist = () => {

    let { id } = useParams()



    return (
        <div>
            <div className="playlistPageInfo">
                <div className="PlaylistPageImage"></div>
                <h1>Title</h1>
                <p>Spotify</p>
                <button>Play</button>
                <div className="icons">

                </div>
                <p></p>




            </div>


        </div>
    )
}

export default Playlist