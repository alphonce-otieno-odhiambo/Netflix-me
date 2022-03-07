import React, {useState, useEffect}from 'react'
import './Nav.css'

function Nav() {

    const [show, hundleShow] = useState(true)
    const transitioncNavbar = () => {
        if(window.scroll > 100){
            hundleShow(true)
        } else {
            hundleShow(false)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll", transitioncNavbar);
        return () => window.removeEventListener("scroll", transitioncNavbar)
    }, [])
  return (
<div className={`nav ${show && "nav_black"}`}>
        <div className='nav_contents'>
        <img 
        className='nav_logo'
        src='https://pngpress.com/wp-content/uploads/2020/09/uploads_netflix_netflix_PNG11.png' alt=''/>
       

        <img
        className='nav_avatar'
        src='https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg' alt=''/>
        </div>
        
       
    </div>
  )
}

export default Nav