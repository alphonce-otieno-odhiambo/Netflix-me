import axios from 'axios'
import React, {useState, useEffect} from 'react'
import requests from '../request'

function Banner() {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random()* request.data.length)
                ]
            );
            return request
        }

        fetchData()
    }, [])
  return (
    <header>
        {/* title*/}
    </header>
  )
}

export default Banner