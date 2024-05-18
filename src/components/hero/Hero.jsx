import React from 'react'
import './hero.css'
import banner from '../../assets/image01.png'

function Hero() {
  return (
    <div className='hero_container'>
      <div className='hero_wrapper'>
        <div className='hero_content'>
          <h1>Dream Big, Start Small, <br /> Scale fast! At ZillionsCode_</h1>
          <p>From inception to implementation, we craft tailored solutions that propel SMEs and startups to unprecedented success. Let's embark on a journey fueled by innovation, collaboration, and boundless possibilities. Together, let's make your vision a digital reality.</p>
          <button className='primary_button'>Book a Free Consultation!</button>
        </div>

        <div className='hero_banner'>
          <img src={banner} alt='banner' />
        </div>

      </div>
    </div>
  )
}

export default Hero
