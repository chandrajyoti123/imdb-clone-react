import React from 'react'
import './HomeCard.css'

export default function HomeCard({homeimg}) {
  return (
    <div className='home-card'>
        <img src={`https://image.tmdb.org/t/p/original${homeimg}`}/>
        <div className='home-card-body'>
            <h1>this is tara</h1>
        </div>
      
    </div>
  )
}
