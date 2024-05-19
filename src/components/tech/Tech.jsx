import React from 'react'
import './tech.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import logo1 from '../../assets/figma.png'
import logo2 from '../../assets/flutter.png'
import logo3 from '../../assets/nextjs.png'
import logo4 from '../../assets/nodejs.png'
import logo5 from '../../assets/python.png'

function Tech() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 2000,
  }

  const techlist = [
    { image: logo1 },
    { image: logo2 },
    { image: logo3 },
    { image: logo4 },
    { image: logo5 },

  ];

  return (

    <div className='tech_container'>
      <h2>Powered Through Advanced Technology</h2>
      <p>From robust platforms to versatile languages, explore the powerful tools that empower our digital prowess; ensuring your project is built on the forefront of technological excellence.</p>
      <Slider {...settings}>
      {techlist.map((tech, index) => (
        <div key={index} className='tech_logo'>
          <img src={tech.image} alt={`logo${index}`} />
        </div>
      ))}
      </Slider>
    </div>
  )
}

export default Tech
