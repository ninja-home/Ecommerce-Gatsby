import React from "react"
import  SEO  from "../components/seo"
import { Button, Purchase } from '../styles/Components'
import { Link } from "gatsby"
import Footer from '../components/Footer';
import {GlobalStyle} from "../components/styles/globalStyles";



const  Thanks =() => (
   <div>
      <SEO title="canceled purchase" />
     <GlobalStyle />
      <Purchase>
        <h2>
          Canceled purchase
          <span role="img" aria-label="emoji">
            💔
          </span>
        </h2>
        <p>We're so sorry for that.</p>
        <p>I hope that you will purchase anything else.</p>
        <span role="img" aria-label="emoji">
          🥺
        </span>
        <Link to="/">
          <Button>Back to the home</Button>
        </Link>
       
      </Purchase>
     <Footer />
    </div>
  )


export default Thanks
