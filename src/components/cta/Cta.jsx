import React from 'react'
import './cta.css'

function Cta() {
  return (
    <div className='cta_container'>
      <div className='cta_wrapper'>
        <div className='cta_content'>
          <div>
            <h2>Why working with us ?</h2>
            <p>Whether you’re embarking on the startup journey or navigating the growth trajectory of an enterprise, you can count on us to deliver customised solutions that align perfectly with your objectives.</p>
          </div>

          <div className='cta_content_box_wrapper'>
            <div className='cta_content_box'>
              <h3>Strategic Partner</h3>
              <div className='line'></div>
              <p>We build websites that not only align with your brand but also one that delivers results aligned with your business goals.</p>
            </div>
            <div className='cta_content_box'>
              <h3>Strategic Partner</h3>
              <div className='line'></div>
              <p>We build websites that not only align with your brand but also one that delivers results aligned with your business goals.</p>
            </div>
          </div>
          <div className='cta_content_box_wrapper'>
            <div className='cta_content_box'>
              <h3>Strategic Partner</h3>
              <div className='line'></div>
              <p>We build websites that not only align with your brand but also one that delivers results aligned with your business goals.</p>
            </div>
            <div className='cta_content_box'>
              <h3>Strategic Partner</h3>
              <div className='line'></div>
              <p>We build websites that not only align with your brand but also one that delivers results aligned with your business goals.</p>
            </div>
          </div>
        </div>

        <div className='cta_form'>

          <div>
            <h2>Contact us</h2>
            <p>Your journey with us is marked by open communication and collaborative ideation. We believe in building not just projects but lasting partnerships.</p>
          </div>

          <div className='cta_form_control'>
            <input type="text" placeholder='Full Name' required />
            <div className='cta_input_inline'>
              <input type="text" placeholder='Business Email' required />
              <input type="number" placeholder='Mobile' required/>
            </div>
            <textarea type="text" placeholder='Message' required/>
          </div>
          <button type='submit' className='primary_button lg-padding'>Send Message</button>
          <p>We're committed to your privacy. ZillionsCode uses the information you provide to us to contact you about our relevant products, and services.</p>
        </div>
      </div>
    </div>
  )
}

export default Cta
