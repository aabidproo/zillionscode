import React from 'react'
import { useState } from 'react'
import './solutions.css'
import banner from '../../assets/image03.png'
// import { IoIosArrowDown } from 'react-icons/io'
import solutionsIcon from '../../assets/solutions_icon.png'


function Solutions() {

  const [selected, setSelected] = useState(null)

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }


  return (
    <div className='solution_container'>
      <div className='solution_wrapper'>
        <div className='solution_content'>

          {data.map((item, i) => (
            <div className='item'>
              <div className='item_flex' onClick={() => toggle(i)}>
                <div className='solutions'>
                  <img src={solutionsIcon} alt="solutions" />
                  <h2>{item.solution}</h2>
                </div>
                <span> {selected === i ? "-" : "+"}</span>
              </div>
              <div className={selected === i ? "show" : "description"}>
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
