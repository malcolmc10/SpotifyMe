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
    {
        id: 108,
        category_id: 2,
        name: 'Friday Night',
        img: 'https://images.unsplash.com/photo-1563784462386-044fd95e9852?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80',
        des: 'Take me back to the land of beaches...'
    },
    {
        id: 109,
        category_id: 2,
        name: 'Dance Dance',
        img: 'https://images.unsplash.com/photo-1466554934129-f71df54ebb27?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        des: 'Dance till you drop...'
    },
    {
        id: 110,
        category_id: 1,
        name: 'Study Group',
        img: 'https://images.unsplash.com/photo-1555323912-3526a765162b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1791&q=80',
        des: 'Study with your friends and have a good time...'
    },
    {
        id: 111,
        category_id: 1,
        name: 'Into Indie',
        img: 'https://images.unsplash.com/photo-1600102598918-b97064b8ae83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        des: 'Focus with this indie playlist...'
    },
    {
        id: 112,
        category_id: 1,
        name: 'Pump Up Jams',
        img: 'https://images.unsplash.com/photo-1575540325855-4b5d285a3845?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        des: 'Time to workout...'
    },
    {
        id: 113,
        category_id: 3,
        name: 'Tame the Beast',
        img: 'https://images.unsplash.com/photo-1561907484-2cfeddf02318?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1334&q=80',
        des: 'Relief the stress with this magical playlist...'
    },
    {
        id: 114,
        category_id: 4,
        name: 'Freedom Unmuted',
        img: 'https://images.unsplash.com/photo-1574322101375-2591ed7667cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        des: 'Let the beats drop...'
    },
    {
        id: 115,
        category_id: 4,
        name: 'Music Festival',
        img: 'https://images.unsplash.com/photo-1598321677385-e27c40329aed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        des: 'Your favorites all in one place...'
    },
    {
        id: 116,
        category_id: 4,
        name: 'UnHinged',
        img: 'https://images.unsplash.com/photo-1571751239008-50cad6cb9265?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        des: 'Let loose with these favorites...'
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