import React from 'react';
import { NavBarStyle, NavStyle} from '../Header/styles.js'
import { FooterStyle,FooterLink,FooterText,FooterIconStyle,FooterSubText } from './styles.js'
import Facebook from './img/Facebook.svg'
import Gplus from './img/Gplus.svg'
import Instagram from './img/Instagram.svg'
import Pinterest from './img/Pinterest.svg'
import Twitter from './img/Twitter.svg'

import './Footer.css'

const Footer = () => (
    <div>
    <FooterStyle>
        <FooterIconStyle css={{ gridArea: 'footer-icon'}}  style={{ textAlign: 'center'}}>
            <NavStyle><img style={{ height: '50px'}} src={Facebook}/></NavStyle>
            <NavStyle><img style={{ height: '50px'}} src={Gplus}/></NavStyle>
            <NavStyle><img style={{ height: '50px'}} src={Instagram}/></NavStyle>
            <NavStyle><img style={{ height: '50px'}} src={Pinterest}/></NavStyle>
            <NavStyle><img style={{ height: '50px'}} src={Twitter}/></NavStyle>
        </FooterIconStyle>


            <FooterText css={{ gridArea: 'footer-text'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Etiam placerat erat pharetra facilisis ultricies.
                Pellentesque ut consectetur mauris. Proin sit.
                Pellentesque ut consectetur mauris. Proin sit.</FooterText>

        <FooterSubText>Find us all over Internet.
       Seriously. Everywhere. </FooterSubText>


    </FooterStyle>
    <FooterLink>
        <div style={{ textAlign: 'center'}}>
            © Bear recipes 2018  </div>
        <div style={{ textAlign: 'center'}}>  Built by Bears Team 16 for Chingu Voyage 4 </div>
    </FooterLink>
    </div>
);

export default Footer;

