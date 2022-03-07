import React from 'react'
import './Baner.css'

function Baner() {
  return (
    <header className='baner' style={{
        backgroundSize: 'cover',
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVEvXZ2CPQffI2fT6hAsjO4c8KswvsD80KmA&usqp=CAU')`,
        backgroundPosition: 'center',
    } }>
        <div className='baner_contents'>
            <h1 className='baner_title'>MOVIE NAME</h1>
            <div className='baner_buttons'>
                <button className='baner_btn'>Play</button>
                <button className='baner_btn'>My List</button>
            </div>
            <div className='baner_discrp'>
                This is a test description for the banner 
            </div>
        </div>
        <div className='baner_foot'></div>
    </header> 
        
   
  )
}

export default Baner