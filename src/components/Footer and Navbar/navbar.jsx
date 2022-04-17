import React from 'react'
import './navbar.css'
import galaxy from "./GalaxyWars.png" 
const Navbar = () => {
  return (
    <div className="wrapper">
    <div className="navbar-left">
        <div class="h-2 w-2">
            <img src={galaxy} alt="galaxy"/>
        </div> 
        <div className="text-wrapper">
            GALAXY WARS
        </div>   
    </div>
    <div className="wrapper-list">
        <ul>
            <li className="list-wrapper">EXPLORE</li>
            <li className="list-wrapper">NEWS</li>
            <li className="list-wrapper">COMMUNITY</li>
            <li className="list-wrapper">EQUIP</li>
            <li className="list-wrapper">GUIDE</li>
            <li className="list-wrapper">STORE</li>
            <li className="button">BUY NOW</li>
            <li className="list-wrapper">LOGIN</li>
        </ul>
    </div>
    </div>
    
  )
}

export default Navbar