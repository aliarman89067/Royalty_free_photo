import React from 'react'
import './Footer.css'
import { logo, facebook, instagram, twitter, Linkedin } from '../../assets'
const Footer = () => {
  return (
    <div className='app__footer'>
    <div className='app__footer-container'>
    <div className='app__footer-contact'>
      <img src={logo} alt="Logo" className='logo' />
      <span className='app__footer-contact-box'>
        <h4>Contact: </h4>
        <p>03118314410</p>
      </span>  
      <span className='app__footer-contact-box'>
        <h4>Email: </h4>
        <p>luddo8906@gmail.com</p>
      </span>  
      <span className='app__footer-contact-box'>
        <h4>Address: </h4>
        <p>NYC abc Park</p>
      </span>
      <div className='app__footer-social_links'>
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={twitter} alt="twitter" />
        <img src={Linkedin} alt="linkedin" />
      </div>  
    </div>
    <div className='app__footer-links'>
      <h1>Quick Links</h1>
      <p>Home</p>
      <p>Wallpaper</p>
      <p>Travel</p>
      <p>Nature</p>
      <p>Animals</p>
    </div>
    <div className='app__footer-services'>
      <h1>Help & Info</h1>
      <p>Services</p>
      <p>Privacy Policy</p>
      <p>Uses</p>
      <p>Faq,s</p>
      <p>Licensed</p>
    </div>
    </div>
    </div>
  )
}

export default Footer
