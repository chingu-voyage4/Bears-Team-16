/* eslint-disable */ // FIXME temporary for deployment test
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { HeaderStyle, NavBarStyle, NavStyle, Input, NavItem, SignUpButton } from './styles.js';


const Header = () => (
    <div style={{ marginBottom: `100px` }}>
        <HeaderStyle>
            <div css={{ gridArea: `header-logo` }}>logo</div>
            <NavBarStyle css={{ gridArea: `header-navbar` }}>
                <NavStyle>
                    <Link to="/" style={{ textDecoration: `none` }}><img src='/icons/HOME.svg' /><NavItem>HOME</NavItem></Link>
                </NavStyle>
                <NavStyle>
                    <Link to="/browse" style={{ textDecoration: `none` }}><img src='icons/Browse.svg' /><NavItem>BROWSE</NavItem></Link>
                </NavStyle>
                <NavStyle>
                    <Link to="/about" style={{ textDecoration: `none` }}><img src='/icons/ABOUT.svg' /><NavItem>ABOUT</NavItem></Link>
                </NavStyle>
                <NavStyle>
                    <Link to="/contact" style={{ textDecoration: `none` }}><img src='/icons/Contact.svg' /><NavItem>CONTACT</NavItem></Link>
                </NavStyle>
                <Input placeholder="Search for recipes.." />
                <SignUpButton>SIGN IN</SignUpButton>
            </NavBarStyle>
        </HeaderStyle>
    </div>
);

export default Header;
