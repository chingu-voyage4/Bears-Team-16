import React from 'react';
import facebook from '../../../assets/facebook.svg'
import gplus from '../../../assets/gplus.svg'
import instagram from '../../../assets/instagram.svg'
import pinterest from '../../../assets/pinterest.svg'
import twitter from '../../../assets/twitter.svg'
import './Footer.css';

const Footer = () => (
  <footer>
    <div className="icons">
      <img className="icon" src={facebook} alt="Facebook Icon" />
      <img className="icon" src={gplus} alt="Google+ Icon" />
      <img className="icon" src={instagram} alt="instagram Icon" />
      <img className="icon" src={pinterest} alt="Pinterest Icon" />
      <img className="icon" src={twitter} alt="Twitter Icon" />
    </div>
    <div className="bottom-wrapper">
      <p className="copyright">© Bear recipes 2018</p>
      <p>Built by Bears Team 16 for Chingu Voyage 4</p>
    </div>
  </footer>
);

export default Footer;

