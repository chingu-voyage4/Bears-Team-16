/* eslint-disable */ // FIXME temporary for deployment test
import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from "../../Context"
import './Header.css';
import { HeaderStyle, NavBarStyle, NavStyle, Input, NavItem, SignUpButton } from './styles.js';
import about from '../../../assets/about.svg'
import home from '../../../assets/home.svg'
import browse from '../../../assets/browserecipes.svg'
import contact from '../../../assets/contact.svg'

const Header = () => {
  return (
    <div style={{ marginBottom: `100px` }}>
    <HeaderStyle>
      <div css={{ gridArea: `header-logo` }}>logo</div>
      <NavBarStyle css={{ gridArea: `header-navbar` }}>
        <NavStyle>
          <Link to="/" style={{ textDecoration: `none` }}><img src={about} /><NavItem>HOME</NavItem></Link>
        </NavStyle>
        <NavStyle>
          <Link to="/browse" style={{ textDecoration: `none` }}><img src={home} /><NavItem>BROWSE</NavItem></Link>
        </NavStyle>
        <NavStyle>
          <Link to="/about" style={{ textDecoration: `none` }}><img src={browse} /><NavItem>ABOUT</NavItem></Link>
        </NavStyle>
        <NavStyle>
          <Link to="/contact" style={{ textDecoration: `none` }}><img src={contact} /><NavItem>CONTACT</NavItem></Link>
        </NavStyle>
        <Input placeholder="Search for recipes.." />
        <UserContext.Consumer>
          {
            ({user, logout}) =>
              !!user
                ? <SignUpButton onClick={logout}>LOGOUT</SignUpButton>
                : <Link to="/signin" ><SignUpButton>SIGN IN</SignUpButton></Link>
          }
        </UserContext.Consumer>
      </NavBarStyle>
    </HeaderStyle>
  </div>
)
}

export default Header;
