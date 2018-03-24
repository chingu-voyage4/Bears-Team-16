import React from 'react';
import { NavBarStyle, NavStyle} from '../Header/styles.js'
import { FooterStyle,FooterLink } from './styles.js'
import Facebook from './img/Facebook.png'
import Gplus from './img/Gplus.png'
import Instagram from './img/Instagram.png'
import Pinterest from './img/Pinterest.png'
import Twitter from './img/Twitter.png'

import './Footer.css'

const Footer = () => (
    <div>
    <FooterStyle>
        <NavBarStyle css={{ gridArea: 'footer-icon'}} >
            <NavStyle><img style={{ height: '50px'}} src={Facebook}/></NavStyle>
            <NavStyle><img style={{ height: '50px'}} src={Gplus}/></NavStyle>
            <NavStyle><img style={{ height: '50px'}} src={Instagram}/></NavStyle>
            <NavStyle><img style={{ height: '50px'}} src={Pinterest}/></NavStyle>
            <NavStyle><img style={{ height: '50px'}} src={Twitter}/></NavStyle>
        </NavBarStyle>


            <div css={{ gridArea: 'footer-text'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Etiam placerat erat pharetra facilisis ultricies.
                Pellentesque ut consectetur mauris. Proin sit.
                Pellentesque ut consectetur mauris. Proin sit.</div>


    </FooterStyle>
    <FooterLink>
        <div style={{ textAlign: 'center'}}>
            © Bear recipes 2018  </div>
        <div style={{ textAlign: 'center'}}>  Built by Bears Team 16 for Chingu Voyage 4 </div></FooterLink>
    </div>
);

export default Footer;

