// import React from 'react'
// import { useParams } from 'react-router-dom'
// import { useState,useEffect } from 'react'
// import axios from 'axios'

// export default function DetailedPage() {
//   const {id}=useParams()

//     const [populars,setPopulars]=useState([])
//     console.log(populars)
  
//     const loadPopular= async()=>{
//      try{
//         const response= await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
//         setPopulars(response.data.results)
//      }
//      catch(error){
//         console.log(error)
//      }
//     }
//     useEffect(()=>{
//       loadPopular()
  
//     },[id])
//     const [img,setImg]=useState()
//     console.log(img)
   


  
  

//     useEffect(()=>{
//       // if(populars){
//         populars.forEach(  (movie)=>{
//           const {id}=movie
     
//           if(id==id){
//          setImg(movie)
//           }
    
//         })
//       //  }
//      },[populars,id])
   
    



//   return (
//     <div className='detailedpage'>
//               <h1 >{img?img.overview:""}</h1>
//                  <img src={`https://image.tmdb.org/t/p/original${img?img.poster_path:""}`}/>
      
//     </div>
//   )
// }


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function DetailedPage() {
  const { id } = useParams();

  const [populars, setPopulars] = useState([]);
  const [img, setImg] = useState(null); // Initialize img to null

  useEffect(() => {
    const loadPopular = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
        );
        setPopulars(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    loadPopular();
  }, []);

  useEffect(() => {
    if (populars) {
      populars.forEach((movie) => {
        if (movie.id === Number(id)) { // Check if the movie id matches the id from useParams
          setImg(movie);
        }
      });
    }
  }, [populars, id]);

  return (
    <div className='detailedpage'>
      <h1>{img ? img.overview : ''}</h1>
      <img src={`https://image.tmdb.org/t/p/original${img ? img.poster_path : ''}`} alt="Movie Poster" />
    </div>
  );
}

