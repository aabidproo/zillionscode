import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './stories.css'
import project1 from '../../assets/project01.png'

function Stories() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 3000,
    appendDots: dots => (
      <div style={{ marginTop: "20px" }}>
        <ul className="stories-dots"> {dots} </ul>
      </div>
    ),
  }

  const projects = [
    {
      image: project1,
      description: 'Dive into our client success stories, tangible proof of how we turn challenges into success for our clients.',
      service: 'Web development, UI/UX Design, SEO Optimization, Marketing Strategy ',
      techStach: 'Laravel, react, nextjs, aws',
    },
    {
      image: project1,
      description: 'Dive into our client success stories, tangible proof of how we turn challenges into success for our clients.',
      service: 'Web development, UI/UX Design, SEO Optimization, Marketing Strategy ',
      techStach: 'Laravel, react, nextjs, aws',
    },
    {
      image: project1,
      description: 'Dive into our client success stories, tangible proof of how we turn challenges into success for our clients.',
      service: 'Web development, UI/UX Design, SEO Optimization, Marketing Strategy ',
      techStach: 'Laravel, react, nextjs, aws',
    },
  ];

  return (
    <div className='stories_container'>

      <div className='stories_heading'>
        <h2>Client Success Stories</h2>
        <p>Dive into our client success stories, tangible proof of how we turn challenges into success for our clients.</p>
      </div>

      <Slider {...settings}>
        {projects.map((data, index) => (
          <div key={index} className='stories_wrapper'>
            <img src={data.image} alt={`logo${index}`} />

            <div className='stories_content'>
              <div>
                <h4>Project Description</h4>
                <p>{data.description}</p>
              </div>
              <div className='stories_content_flex'>
                <div>
                  <h4>Service</h4>
                  <p>{data.service}</p>
                </div>
                <div>
                  <h4>Technology Stack</h4>
                  <p>{data.techStach}</p>
                </div>
              </div>

              <button className='secondary_button_rounded'>View Project</button>

            </div>

          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Stories
