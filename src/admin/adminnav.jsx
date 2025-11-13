import React from 'react'
// import "./navbar.css"
import {FaFilm, FaHome, FaRunning,  FaTv, FaUserCircle, FaVideo} from 'react-icons/fa';

const Adminnav = () => {
  return (
    <div className='navbar'>
       <a href='/admin'> <img src='./Star.png' alt='error' className='img1'></img></a>
       <nav className='nav'>
       <a href='/admin' className='icon-container' ><FaHome className='icon' /><span className="tooltip">Home</span> </a>    <br></br>
       <a href='/tvadmin' className='icon-container' ><FaTv className='icon' /><span className="tooltip">Tv</span> </a><br></br>
       <a href='/sportsadmin' className='icon-container' ><FaRunning  className='icon' /><span className="tooltip">Sports</span> </a><br></br>
       <a href='/seriesadmin' className='icon-container' ><FaVideo  className='icon' /><span className="tooltip">Web Series</span> </a><br></br>
       <a href='/movieadmin' className='icon-container'><FaFilm   className='icon' /><span className="tooltip">Movies</span> </a><br></br>
       <a href='/videoadmin' className='icon-container'><FaUserCircle   className='icon' /><span className="tooltip">MySpace</span><br></br> </a>
       
      </nav>

      

    </div>
  )
}

export default Adminnav;
