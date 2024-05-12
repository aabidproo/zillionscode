import React from 'react'
import '../company/company.css'

import logo1 from '../../assets/figma.png'
import logo2 from '../../assets/flutter.png'
import logo3 from '../../assets/nextjs.png'
import logo4 from '../../assets/nodejs.png'
import logo5 from '../../assets/python.png'

function Company() {
  return (
    <div className='company_container'>
      <p>Trusted by Fastest Growing SMEs & Startups</p>
      <div className='company_logo'>
        <img src={logo1} alt='logo1'/>
        <img src={logo2} alt='logo1'/>
        <img src={logo3} alt='logo1'/>
        <img src={logo4} alt='logo1'/>
        <img src={logo5} alt='logo1'/>
      </div>
    </div>
  )
}

export default Company
