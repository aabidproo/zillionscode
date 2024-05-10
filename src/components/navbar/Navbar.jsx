import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.svg';


function Navbar() {
  return (
    <div className='wrapper' >
      <div className='nav_container'>
        <img src={logo} alt='logo' />
        <div className='nav_links'>
          <ul>
            <li><a href="#Home">Home</a></li>
            <li><a href="#Solutions">Solutions</a></li>
            <li><a href="#Stories">Success Stories</a></li>
            <li><a href="#Company">Company</a></li>
          </ul>
          <button type='button' className='secondary_button'>Contact Us</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
