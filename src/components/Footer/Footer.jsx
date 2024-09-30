import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets';

const Footer = () => {
    return(
        <div className='footer' id='footer'>
            <div className='footer-content'>
               <div className='footer-content-left'>
                   <img src={assets.logo_2} alt=''/>
                   <p></p>
                   <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt=''/>
                    <img src={assets.twitter_icon} alt=''/>
                    <img src={assets.linkedin_icon} alt=''/>
                   </div>
               </div>
               <div className='footer-content-center'>
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Location</li>
                        <li>Privacy Policy</li>
                    </ul>
               </div>
               <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 98765-43210</li>
                    <li>contact@utlitrack.com</li>
                </ul>
               </div>
            </div>
        <hr />
        <p className='footer-copyright'>Copyright 2024 - All Rights Reserved.</p>
        </div>
    )
}
export default Footer;