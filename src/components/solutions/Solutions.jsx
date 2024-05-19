import React from 'react'
import './solutions.css'
import banner from '../../assets/image03.png'


function Solutions() {
  return (
    <div className='solution_container'>
      <div className='solution_wrapper'>
        <div className='solution_content'>
          
        {data.map((item, i) => (
            <div className='item'>
                 <div className='solutions'>
                  <h2>{item.solution}</h2>
                  <span> <i></i> </span>
                 </div>
                 <div className='description'>
                  <p>{item.description}</p>
                 </div>
            </div>
        ))}

        </div>

        <div className='solution_banner'>
          <img src={banner} alt='banner' />
        </div>

      </div>
    </div>
  )
}


const data = [

  {
    solution: 'Web Development',
    description: 'We build websites that not only align with your brand but also one that delivers results aligned with your business goals.'
  },

  {
    solution: 'Marketing Strategy',
    description: 'We build websites that not only align with your brand but also one that delivers results aligned with your business goals.'
  },

  {
    solution: 'UI/UI and Branding',
    description: 'We build websites that not only align with your brand but also one that delivers results aligned with your business goals.'
  },

  {
    solution: 'SEO Optimization',
    description: 'We build websites that not only align with your brand but also one that delivers results aligned with your business goals.'
  },

  {
    solution: 'Mobile App and Platform Developments',
    description: 'We build websites that not only align with your brand but also one that delivers results aligned with your business goals.'
  }

]

export default Solutions
