import React from 'react'
import './footer.css'
import footerlogo from '../../assets/footerlogo.png'

import { FaFacebook, FaInstagram, FaLinkedin, } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <div className='footer_container'>

      <div className='footer_content'>
        <div className='footer_logo'>
          <img src={footerlogo} alt='footerlogo' />
          <p>At ZillionsCode, we believe in leaving a lasting impression. Connect with us, and let's create digital magic together!</p>
        </div>

        <div className='footer_buttons'>
          <div className='footer_button_links'>
            <p>All rights reserved &copy; {currentYear}</p>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-and-conditions">Terms & Conditions</a></li>

          </div>

          <div className='footer_icon'>
            <a href="https://react-icons.github.io/react-icons/"> <FaXTwitter /></a>
            <a href="https://react-icons.github.io/react-icons/"> <FaLinkedin /></a>
            <a href="https://react-icons.github.io/react-icons/"> <FaInstagram /></a>
            <a href="https://react-icons.github.io/react-icons/"> <FaFacebook /></a>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Footer
