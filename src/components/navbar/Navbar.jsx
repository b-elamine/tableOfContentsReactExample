import React from 'react'
import "./Navbar.css"
import logo from "../../assets/ai.png"
import search from "../../assets/rechercher.png"

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li>Home</li>
            <li>Models</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

        <div className='search-box'>
            <input type="text" placeholder='Search' />
            <img src={search} alt="" />
        </div>
    </div>
  )
}

export default Navbar