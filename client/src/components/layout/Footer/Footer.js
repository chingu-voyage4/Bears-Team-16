import React from 'react';

import './Footer.css';

const Footer = () => (
  <footer>
    <div className="top-wrapper">
      <div className="icons-wrapper">
        <div className="icons">
          <img className="icon" src="/icons/Facebook.svg" alt="Facebook Icon" />
          <img className="icon" src="/icons/Gplus.svg" alt="Google+ Icon" />
          <img className="icon" src="/icons/Instagram.svg" alt="Instagram Icon" />
          <img className="icon" src="/icons/Pinterest.svg" alt="Pinterest Icon" />
          <img className="icon" src="/icons/Twitter.svg" alt="Twitter Icon" />
        </div>
        <div className="icons-description">
          <span className="icons-description-primary">Find us all over Internet.</span>
          <span className="icons-description-secondary">Seriously. Everywhere.</span>
        </div>
      </div>
      <div className="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat
        erat pharetra facilisis ultricies. Pellentesque ut consectetur mauris.
        Proin sit.
      </div>
    </div>
    <div className="bottom-wrapper">
      <p className="copyright">© Bear recipes 2018</p>
      <p>Built by Bears Team 16 for Chingu Voyage 4</p>
    </div>
  </footer>
);

export default Footer;

