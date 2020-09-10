import React from 'react'
import { ReactComponent as PlayIcon } from '../svgs/play.svg'
import Playlists from './Playlists'

const Categories = () => {

    const dataCategories = [
        {
           id: 1,
           name:  'Focus',
            tagline: 'Music to help you concentrate'
            
        },
        {
            id: 2,
            name:  'Mood',
            tagline: 'Playlists to match your mood.'
         },
         {
            id: 3,
            name:  'Chill',
            tagline: 'Unwind with these calming playlists.'
         },
         {
            id: 4,
            name:  'Need More Bass',
            tagline: 'Celetrate the best way with these jams.'
         },

    ]
    return (
        <div>
            {dataCategories.map((category, id) => (
                <div className="cardsWrap" key={id}>
                <h2> {category.name} </h2>
                {/* <span className="seeAll">See All</span> */}
                <p className="subText">Music to motivate you</p>
                <Playlists category_id={category.id} />
                

                </div>

            ))}
            <div>
            
            </div>

            
        </div>
        
    )
}

export default Categories