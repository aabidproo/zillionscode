import React from 'react'
import './stories.css'
import project1 from '../../assets/project01.png'

function Stories() {
  return (
    <div className='stories_container'>
      
      <div className='stories_title'>
      <h2>Client Success Stories</h2>
      <p>Dive into our client success stories, tangible proof of how we turn challenges into success for our clients.</p>
      </div>

      <div className='stories_wrapper'>
        <img src={project1} alt='project1' />

        <div className='stories_content'>
          <div>
            <h4>Project Name</h4>
            <p>Dive into our client success stories, tangible proof of how we turn challenges into success for our clients.</p>
          </div>
          <div className='stories_content_flex'>
            <div>
              <h4>Service</h4>
              <p>Dive into our client success stories, tangible proof of how we turn challenges into success for our clients.</p>
            </div>
            <div>
              <h4>Technology Stack</h4>
              <p>Dive into our client success stories, tangible proof of how we turn challenges into success for our clients.</p>
            </div>
          </div>

          <button className='secondary_button_rounded'>View Project</button>

        </div>

      </div>
    </div>
  )
}

export default Stories
