import React from 'react';
import { Link } from 'react-router-dom';
import {HeaderStyle, NavBarStyle, NavStyle} from './styles.js'
import About from './img/About.png'
import Home from './img/Home.png'
import Browse from './img/Browse.png'
import Contact from './img/Contact.png'

const Header = () => (
    <HeaderStyle>
        <div css={{ gridArea: 'header-logo'}}>logo</div>
        <NavBarStyle css={{ gridArea: 'header-navbar'}}>
            <NavStyle>
                <Link to="/login"><img src={Home}/></Link>
            </NavStyle>
            <NavStyle>
                <Link to="/login"><img src={Browse}/></Link>
            </NavStyle>
            <NavStyle>
                <Link to="/login"><img src={About}/></Link>
            </NavStyle>
            <NavStyle>
                <Link to="/login"><img src={Contact}/></Link>
            </NavStyle>
        </NavBarStyle>
    </HeaderStyle>
);

export default Header;
