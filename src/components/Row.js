import React, {useState, useEffect} from 'react'
import axios from  'axios';


function Row({title, fetchUlr}) {

    const [movies , setMovies] = useState([]);

    /** specific running using useEffect*/ 
    useEffect = (() => {

        async function fetchData(){
            const request = await axios.get(fetchUlr);
            setMovies(request.data.results);
            
            return request;
        }
        fetchData()
    }, [fetchUlr]);
    
  return (
    <div className='row'>
        <h2>{title} </h2>
        <div className='row-poster'>
            {movies.map(movie => {
                <img src={movie.poster_path} alt={movie.name}/>
            })}
        </div>
    </div>
  )
}

export default Row