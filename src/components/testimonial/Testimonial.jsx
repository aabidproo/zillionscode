import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './testimonial.css'
import image1 from '../../assets/testimonial.png'

function Testimonial() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 3000,
  }

  const testimonials = [
    {
      title: "Testimonial title here",
      message: "We are not just a digital agency; we are your strategic partner, committed to fueling your business growth journey. From crafting robust marketing strategies to designing captivating websites and developing cutting-edge software solutions, we collaborate with you to conceive a winning strategy and seamlessly execute it.",
      author: "John Doe",
      designation: "CEO, Company"
    },
    {
      title: "Testimonial title here",
      message: "We are not just a digital agency; we are your strategic partner, committed to fueling your business growth journey. From crafting robust marketing strategies to designing captivating websites and developing cutting-edge software solutions, we collaborate with you to conceive a winning strategy and seamlessly execute it.",
      author: "John Doe",
      designation: "CEO, Company"
    },
    {
      title: "Testimonial title here",
      message: "We are not just a digital agency; we are your strategic partner, committed to fueling your business growth journey. From crafting robust marketing strategies to designing captivating websites and developing cutting-edge software solutions, we collaborate with you to conceive a winning strategy and seamlessly execute it.",
      author: "John Doe",
      designation: "CEO, Company"
    },
    // Add more testimonials as needed
  ];


  return (

    <div className='testimonial_container'>

      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className='testimonial_wrapper'>
            <img src={image1} alt="image1" />
            <div className='testimonial_content'>
              <div>
                <h2>{testimonial.title}</h2>
                <p>{testimonial.message}</p>
              </div>
              <div>
                <h4>{testimonial.author}</h4>
                <p>{testimonial.designation}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

    </div>
  )
}

export default Testimonial
