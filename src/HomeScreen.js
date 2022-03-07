import React from 'react'
import './HomeScreen.css'
import Nav from './Nav'
import Baner from './Baner'
import requests from './Request'
import Row from './Row'

function HomeScreen() {
  return (
    <div className='homeScreen'>
        <Nav/>
        <Baner/>
        <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
        <Row title='Trending Movies' fetchUrl={requests.fetchTrending}/>
        <Row title='Top Rated movies' fetchUrl={requests.fetchTopRated}/>
        <Row title='Commedy Movies' fetchUrl={requests.fetchComedyMovies}/>
        <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
        <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies}/>
        <Row title='Documentary Movies' fetchUrl={requests.fetchDocumentaries}/>
    </div>
  )
}

export default HomeScreen