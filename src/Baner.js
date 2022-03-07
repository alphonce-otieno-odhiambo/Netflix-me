import React, {useState, useEffect} from 'react'
import './Baner.css'

function Baner() {

    const [movie, setMovie] = useState([])

    function trancate(string, n){
        return string?.length > n? string.substr(0, n-1) + '...' : string;
    }
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
                {trancate(
                `This is a test description for the banner
                This is a test description for the bannerThis is a test description for the bannerThis is a test description for the bannerThis is a test description for the bannerThis is a test description for the bannerThis is a test description for the bannerThis is a test description for the bannerThis is a test description for the bannervvThis is a test description for the bannerThis is a test description for the bannerThis is a test description for the banner`,150 )}
            </div>
        </div>
        <div className='baner_foot'></div>
    </header> 
        
   
  )
}

export default Baner