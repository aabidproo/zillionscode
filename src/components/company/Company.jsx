import React from 'react'
import '../company/company.css'

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import logo1 from '../../assets/figma.png'
import logo2 from '../../assets/flutter.png'
import logo3 from '../../assets/nextjs.png'
import logo4 from '../../assets/nodejs.png'
import logo5 from '../../assets/python.png'



function Company() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 2000,
  }


  const companies = [
    { image: logo1 },
    { image: logo2 },
    { image: logo3 },
    { image: logo4 },
    { image: logo5 },
  ];


  return (

    <div className='company_container'>
      <p>Trusted by Fastest Growing SMEs & Startups</p>
      <Slider {...settings}>
        {companies.map((company, index) => (
          <div key={index} className='company_logo'>
           <img src={company.image} alt={'logo${index}'}/>
          </div>
        ))}
      </Slider >
    </div>

  )
}

export default Company
