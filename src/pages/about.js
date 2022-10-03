import React,{useState} from "react"
import SEO from "../components/seo"
import {HeroAbout,
   HeroContent,
  HeroItems,
  HeroH1,
}from "../components/Hero/HeroElement"
import {GlobalStyle} from "../components/styles/globalStyles"
import Navbar from "../components/NavBar"
import Sidebar from "../components/Sidebar"
import {MainContent} from "../components/styles/base"
import Image from '../assets/images/delivery.jpeg';

const About = () => {

const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return(
    <HeroAbout>
       <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
    <GlobalStyle />
    <SEO title="About" />
  <HeroContent>
        <HeroItems>
          <HeroH1>About US</HeroH1> 
        </HeroItems>
      </HeroContent>
      <MainContent>
        <h1 style={{color:"#e31837"}}>About</h1>
        <h2 style={{textAlign:'center'}}><strong>BurguerMaik<strong/></strong></h2>    
          <p>Craving some delicious Greek food? Maybe you’re in the mood for a juicy steak? No matter what kind of meal you have in mind, The BurguerMaik is ready to prepare it for you.
          </p>
        <p>Since 1973, The BurguerMaik has been the go-to diner for residents of Venezuela,Caracas. Our diner serves breakfast all day, in addition to wholesome and flavorful dining options for lunch and dinner. From burgers to salads, seafood to pastas, you’ll find all kinds of hearty meals prepared fresh at The Spot Restaurant. Our diner also has a full bakery with delicious baked goods and other treats, including our famous cheesecake. Sounds delicious, right?</p>

        <p>We’re here to serve you the best food around, whenever you’re looking for a great American restaurant in Venezuela, Caracas.</p>

      

        <img src={Image} alt={Image}/>

  <p>
BurguerMaik is happy to be the venue for your next presentation, reunion, party, luncheon or banquet. With two banquet rooms, presentation screens, an LCD projector and a podium, The Spot Restaurant can transform a space into the perfect site for your gathering. </p>

        <p>
Whether you want to have your associates attend a training luncheon or you're planning a birthday party, trust that we have the space, equipment and menu to accommodate any occasion. To reserve a space for your next event, come by the restaurant or call +58(212) 723-8149 today.

        </p>
      </MainContent>
     </HeroAbout>
)
}

export default About
