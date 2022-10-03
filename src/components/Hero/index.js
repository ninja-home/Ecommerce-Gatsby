import React, { useState } from 'react';
import Navbar from '../NavBar'
import Sidebar from '../Sidebar'
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
  } from './HeroElement'
import { Link } from 'gatsby';
const Hero = () => {


const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return(
    <HeroContainer>
       <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Greatest Burguer Ever</HeroH1>
          <HeroP>Ready in 60 seconds</HeroP>
          <Link to='/Cart'><HeroBtn>Place Order</HeroBtn></Link>
        </HeroItems>
      </HeroContent>
      </HeroContainer>

  )
}
export default Hero
