import React from 'react'
import './HomeScreen.css'
import Nav from './Nav'
import Baner from './Baner'

function HomeScreen() {
  return (
    <div className='homeScreen'>
        <Nav/>
        <Baner/>
        {/* {rows} */}
    </div>
  )
}

export default HomeScreen