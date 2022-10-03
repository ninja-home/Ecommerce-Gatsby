import React from 'react'
import {Nav,NavLink, NavIcon,Bars} from './NavBarElement';

const Navbar = ({toggle}) => (
  <>
  <Nav>
    <NavLink to='/'>BurguerMaik</NavLink>
    <NavIcon onClick={toggle}>
      <p>Menu</p>
      <Bars />
    </NavIcon>
  </Nav>
  </>
)
export default Navbar
