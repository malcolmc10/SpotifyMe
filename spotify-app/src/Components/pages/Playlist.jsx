import React from 'react';
import { useParams } from 'react-router-dom'
import { ReactComponent as PlayIcon } from '../../svgs/play.svg'
import { ReactComponent as Heart } from '../../svgs/heart.svg'
import { ReactComponent as NoteIcon } from '../../svgs/note.svg'

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

                        <span className="playIcon"><PlayIcon /></span>

                        <div className="icons">
                            <div className="icon iconsHeart">
                                <Heart />
                            </div>
                            <div className="icon iconsDots">

                            </div>

                        </div>

                    </div>

                    <ul className="songList">
                        <li>
                            <div className="songIcon">
                                <NoteIcon className="noteI" />
                                <PlayIcon className="playI" />
                            </div>
                            <div className="songDetails">
                                <h3>Finally Moving</h3>
                                <span >Pretty Lights</span>

                            </div>
                            <div className="songTime">
                                <span>7:01</span>
                            </div>
                        </li>

                        <li>
                            <div className="songIcon">
                                <NoteIcon className="noteI" />
                                <PlayIcon className="playI" />
                            </div>
                            <div className="songDetails">
                                <h3>Sweet Memories</h3>
                                <span >CID, KasKade</span>

                            </div>
                            <div className="songTime">
                                <span>2:37</span>
                            </div>
                        </li>

                        <li>
                            <div className="songIcon">
                                <NoteIcon className="noteI" />
                                <PlayIcon className="playI" />
                            </div>
                            <div className="songDetails">
                                <h3>Hear Me Out - Anja Schneider Remix</h3>
                                <span >Yotto, SØNIN, Laudic, Ana Schneider</span>

                            </div>
                            <div className="songTime">
                                <span>3:24</span>
                            </div>
                        </li>

                        <li>
                            <div className="songIcon">
                                <NoteIcon className="noteI" />
                                <PlayIcon className="playI" />
                            </div>
                            <div className="songDetails">
                                <h3>You Bring Me Joy</h3>
                                <span >BLR, FVNDAMENTAL</span>

                            </div>
                            <div className="songTime">
                                <span>3:30</span>
                            </div>
                        </li>

                        <li>
                            <div className="songIcon">
                                <NoteIcon className="noteI" />
                                <PlayIcon className="playI" />
                            </div>
                            <div className="songDetails">
                                <h3>Final Call</h3>
                                <span >Sem Thomasson, Sparre</span>

                            </div>
                            <div className="songTime">
                                <span>3:14</span>
                            </div>
                        </li>

                        <li>
                            <div className="songIcon">
                                <NoteIcon className="noteI" />
                                <PlayIcon className="playI" />
                            </div>
                            <div className="songDetails">
                                <h3>La Luh</h3>
                                <span >Choomba</span>

                            </div>
                            <div className="songTime">
                                <span>3:33</span>
                            </div>
                        </li>

                        <li>
                            <div className="songIcon">
                                <NoteIcon className="noteI" />
                                <PlayIcon className="playI" />
                            </div>
                            <div className="songDetails">
                                <h3>Together - SMLE Remix</h3>
                                <span >CID, SMLE</span>

                            </div>
                            <div className="songTime">
                                <span>3:14</span>
                            </div>
                        </li>

                        <li>
                            <div className="songIcon">
                                <NoteIcon className="noteI" />
                                <PlayIcon className="playI" />
                            </div>
                            <div className="songDetails">
                                <h3>Space</h3>
                                <span >Plusmore</span>

                            </div>
                            <div className="songTime">
                                <span>3:44</span>
                            </div>
                        </li>

                        <li>
                            <div className="songIcon">
                                <NoteIcon className="noteI" />
                                <PlayIcon className="playI" />
                            </div>
                            <div className="songDetails">
                                <h3>We Are The Universe</h3>
                                <span >llan Bluestone, El Waves</span>

                            </div>
                            <div className="songTime">
                                <span>4:00</span>
                            </div>
                        </li>

                        <li>
                            <div className="songIcon">
                                <NoteIcon className="noteI" />
                                <PlayIcon className="playI" />
                            </div>
                            <div className="songDetails">
                                <h3>Ksamil</h3>
                                <span >Dave Winnel</span>

                            </div>
                            <div className="songTime">
                                <span>3:10</span>
                            </div>
                        </li>

                        <li>
                            <div className="songIcon">
                                <NoteIcon className="noteI" />
                                <PlayIcon className="playI" />
                            </div>
                            <div className="songDetails">
                                <h3>Organic Cold Brewed Hipster Funk</h3>
                                <span >Martin Roth</span>

                            </div>
                            <div className="songTime">
                                <span>3:55</span>
                            </div>
                        </li>

                        <li>
                            <div className="songIcon">
                                <NoteIcon className="noteI" />
                                <PlayIcon className="playI" />
                            </div>
                            <div className="songDetails">
                                <h3>W.T.F</h3>
                                <span >Moon Boots</span>

                            </div>
                            <div className="songTime">
                                <span>4:52</span>
                            </div>
                        </li>

                        <li>
                            <div className="songIcon">
                                <NoteIcon className="noteI" />
                                <PlayIcon className="playI" />
                            </div>
                            <div className="songDetails">
                                <h3>10AM</h3>
                                <span >Murtagh</span>

                            </div>
                            <div className="songTime">
                                <span>5:08</span>
                            </div>
                        </li>

                        <li>
                            <div className="songIcon">
                                <NoteIcon className="noteI" />
                                <PlayIcon className="playI" />
                            </div>
                            <div className="songDetails">
                                <h3>Time</h3>
                                <span >FEYNMAN, Monomotion</span>

                            </div>
                            <div className="songTime">
                                <span>4:01</span>
                            </div>
                        </li>





                    </ul>




                </div>
            </div>

        </div>
    )
}

export default Playlist