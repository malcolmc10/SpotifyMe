import React from 'react'
import { ReactComponent as PlayIcon } from '../svgs/play.svg'
import {Link} from 'react-router-dom';

const Playlists = (props) => {
    const dataPlaylists = [{
        id: 101,
        category_id: 3,
        name: 'Chill and Relax',
        img: 'https://images.unsplash.com/photo-1590364962261-20baeb6262a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        des: 'Sit back and relax with this smooth playlist.'

    },
    {
        id: 102,
        category_id: 3,
        name: 'Stargazing',
        img: 'https://images.unsplash.com/photo-1536430380482-2dc009b8dd36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
        des: 'End your night with these low key bangers.'
    },
    {
        id: 103,
        category_id: 3,
        name: 'Island Time',
        img: 'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80',
        des: 'No time like island time.'
    },
    {
        id: 104,
        category_id: 1,
        name: 'Code Beats',
        img: 'https://images.unsplash.com/photo-1568781269551-3e3baf5ec909?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        des: 'Code with these killer beats...'
    },
    {
        id: 105,
        category_id: 4,
        name: 'Hi-Fi Beats',
        img: 'https://images.unsplash.com/photo-1502872364588-894d7d6ddfab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        des: 'House music on steroids.'
    },
    {
        id: 106,
        category_id: 2,
        name: 'Emo Forever',
        img: 'https://images.unsplash.com/photo-1500099817043-86d46000d58f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        des: 'Remember to bring your black eyeliner!'
    },
    {
        id: 107,
        category_id: 2,
        name: 'Laugh All Day',
        img: 'https://images.unsplash.com/photo-1524293568345-75d62c3664f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=654&q=80',
        des: 'Laugh till it hurts with this funny playlist...'
    },


    ]

    const matchedPlaylists = dataPlaylists.filter(playlist => playlist.category_id === props.category_id)

    return (
        
            <div className="cardsWrapInner">
                {matchedPlaylists.map((playlist, id) => (
                    <Link to={`/playlist/` + playlist.id}>
                    <div className="card" key={id} >
                        <div className="cardImage">
                            <img className="cardImage-background" src={playlist.img} />
                        </div>
                        <div className="cardContent">
                <h3>{playlist.name}</h3>
                            <span>{playlist.des}</span>

                        </div>
                        <span className="playIcon">
                            <PlayIcon />
                        </span>
                    </div>
                    </Link>
                ))}


                    </div>
        
    )
}

export default Playlists