import React from 'react'
import './testimonial.css'
import testimonial from '../../assets/testimonial.png'

function Testimonial() {
  return (
    <div className='testimonial_container'>
      <div className='testimonial_wrapper'>
        <img src={testimonial} alt='testimonial' />
        
        <div className='testimonial_content'>
          <div>
            <h2>Testimonial title here</h2>
            <p>We are not just a digital agency; we are your strategic partner, committed to fueling your business growth journey. From crafting robust marketing strategies to designing captivating websites and developing cutting-edge software solutions, we collaborate with you to conceive a winning strategy and seamlessly execute it.</p>
          </div>
          <div>
            <h4>Years of Operation</h4>
            <p>and being strategic partners for our clients</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
