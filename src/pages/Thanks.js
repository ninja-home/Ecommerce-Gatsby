import React from "react"
import  SEO  from "../components/seo"
import { Button, Purchase } from '../styles/Components'
import { Link } from "gatsby"
import {GlobalStyle} from "../components/styles/globalStyles"
import Footer from "../components/Footer"



const  Thanks =() => (
  <div>
      <SEO title="😄🏍️ successful purchase" />
       
      <Purchase>
       <GlobalStyle/>   
        <h2>
          Sucessful purchase
          <span role="img" aria-label="emoji">
             💛
          </span>
        </h2>
        <p>Enjoy your BurguerMaik</p>
        <p>Communicate via WhatsApp now to take your order and get to your home as soon as possible</p>
        <span role="img" aria-label="emoji">
          😄🏍️
        </span>
        <Link to="/">
          <Button>Delivery WhatsApp</Button>
        </Link>
      </Purchase>
    <Footer />


    </div>
  )


export default Thanks
