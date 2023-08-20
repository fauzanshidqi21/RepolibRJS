import React from 'react';
import './Footer.css';
import fb from '../../images/fb_icon.png';
import linkedin from '../../images/li_icon.png';
import insta from '../../images/ig_icon.png';

const Footer = () => {
  return (
    <div className="sb_footer section_padding">
      <div className="sb_footer_links">
        <div className="sb_footer-links-div">
          <h4>Coming soon on</h4>
          <div className='socialmedia'>
            <p><img src={fb} alt=""/></p>
            <p><img src={linkedin} alt=""/></p>
            <p><img src={insta} alt=""/></p>
          </div>
        </div>
        <hr></hr>

        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>
              @{new Date().getFullYear()} CodeInn. All right reserved.
            </p>
          </div>
          <div className="sb_footer-below-links">
            <a href="/terms"><div><p>Terms & Conditions</p></div></a>
            <a href="/privacy"><div><p>Privacy</p></div></a>
            <a href="/security"><div><p>Security</p></div></a>
            <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer