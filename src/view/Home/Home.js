import React, { useState } from 'react'
import axios from 'axios'
import Navbar from '../../components/Navbar/Navbar'
import { useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import './Home.css'
import Popular from '../Popular/Popular';




export default function Home() {
  const [popular,setPopular]=useState([])
  console.log("tara")
  const loadPopular= async()=>{
    const response= await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
   setPopular(response.data.results)
  }
  useEffect(()=>{
    loadPopular()

  },[])
  return (
    <div>
      <Navbar/>
      this is home page
      <div>
      <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >

                  {
                    popular.map((movie)=>{
                      const {backdrop_path,original_title,overview,release_date,vote_average}=movie
                      return( 
                      
                      
                      <div className="body-carousel">
                        <img className='img-carousel' src={`https://image.tmdb.org/t/p/original${backdrop_path}`}/>
                        <div className='text-of-carousel'>
                        <div>{original_title}</div>
                        <div>{overview}</div>
                        <div>{release_date}</div>
                        <div>{vote_average}</div>
                        </div>
                      </div>)

                    })
                  }

              
                    {/* {
                      popular.map(movie => (
                       
                            <div >
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie?movie.backdrop_path:''}`} />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average :""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                                </div>
                            </div>
                        ))
                    } */}
                </Carousel>
      </div>

      <Popular/>
    </div>
  )
}
