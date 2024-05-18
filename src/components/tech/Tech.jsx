import React from 'react'
import './tech.css'

import logo1 from '../../assets/figma.png'
import logo2 from '../../assets/flutter.png'
import logo3 from '../../assets/nextjs.png'
import logo4 from '../../assets/nodejs.png'
import logo5 from '../../assets/python.png'

function Tech() {
  return (
    <div className='tech_container'>
      <h2>Powered Through Advanced Technology</h2>
      <p>From robust platforms to versatile languages, explore the powerful tools that empower our digital prowess; ensuring your project is built on the forefront of technological excellence.</p>

      <div className='tech_logo'>
        <img src={logo1} alt='logo1'/>
        <img src={logo2} alt='logo1'/>
        <img src={logo3} alt='logo1'/>
        <img src={logo4} alt='logo1'/>
        <img src={logo5} alt='logo1'/>
      </div>

      </div>
  )
}

export default Tech
