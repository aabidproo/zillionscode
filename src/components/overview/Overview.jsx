import React from 'react'
import './overview.css'

function Overview() {
  return (
    <div className='overview_container'>
      <div className='overview_box_wrapper'>
        <div className='overview_box'>
          <h3>2+</h3>
          <line></line>
          <h4>Years of Operation</h4>
          <p>and being strategic partners for our clients</p>
        </div>
        <div className='overview_box'>
          <h3>40+</h3>
          <line></line>
          <h4>App and Website Project Completed</h4>
          <p>On time delivery of projects is key to our success.</p>
        </div>
        <div className='overview_box'>
          <h3>74</h3>
          <line></line>
          <h4>Net Promoter Score</h4>
          <p>Customer satisfaction has always been our priority</p>
        </div>

      </div>
    </div>
  )
}

export default Overview
