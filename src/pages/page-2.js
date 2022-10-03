import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import Products from "../components/Products1"
export const query = graphql`
  query GET_DATA {
    allSite {
      edges { 
        node {
          siteMetadata {
            description
          }
        }
      }
    }
    allStripePrice {
      edges {
        node {
          id
          unit_amount
          product {
            name
            metadata {
              description
              img
              wear
            }
          }
        }
      }
    }
  }
`

const SecondPage = ({data}) => (
  <div>
 <SEO title="Home" />
<Products products={data.allStripePrice.edges} />
  </div>
    )

export default SecondPage
