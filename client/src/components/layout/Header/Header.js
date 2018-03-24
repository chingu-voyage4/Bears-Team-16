import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import {HeaderStyle, NavBarStyle, NavStyle, Input, NavItem, SignUpButton} from './styles.js'
import About from './img/About.png'
import Home from './img/Home.png'
import Browse from './img/Browse.png'
import Contact from './img/Contact.png'

const Header = () => (
    <HeaderStyle>
        <div css={{ gridArea: 'header-logo'}}>logo</div>
        <NavBarStyle css={{ gridArea: 'header-navbar'}}>
            <NavStyle>
                <Link to="/login" style={{ textDecoration: 'none'}}><img src={Home}/><NavItem>HOME</NavItem></Link>
            </NavStyle>
            <NavStyle>
                <Link to="/browse" style={{ textDecoration: 'none'}}><img src={Browse}/><NavItem>BROWSE</NavItem></Link>
            </NavStyle>
            <NavStyle>
                <Link to="/about" style={{ textDecoration: 'none'}}><img src={About}/><NavItem>ABOUT</NavItem></Link>
            </NavStyle>
            <NavStyle>
                <Link to="/contact" style={{ textDecoration: 'none'}}><img src={Contact}/><NavItem>CONTACT</NavItem></Link>
            </NavStyle>
            <Input placeholder='Search for recipes..' />
            <SignUpButton>SIGN IN</SignUpButton>
        </NavBarStyle>
    </HeaderStyle>
);

export default Header;
