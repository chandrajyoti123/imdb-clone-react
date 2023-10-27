import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HomeCard from '../../components/HomeCard/HomeCard'
import axios from 'axios'


import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function TopRated() {
  const [populars,setPopulars]=useState([])
  
  const loadPopular= async()=>{
    const response= await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
   setPopulars(response.data.results)
  }
  useEffect(()=>{
    loadPopular()

  },[])
  return (
    <div>
      <Navbar/>
      <div className='popular-section'>
      {
        populars.map((movie)=>{
          const {poster_path,id}=movie
          return <Link to={`/detailed/${id}`}> <HomeCard homeimg={poster_path}/></Link>

        })
      }
      </div>
     
      
    </div>
  )
}
