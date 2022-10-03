import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Products from "../components/Products"
import { productData,productDataTwo } from '../components/Products/data';
import Feature from "../components/Feature";
import Footer from "../components/Footer";


const IndexPage = () => {
  return(
  <Layout>
    <SEO title="Home" />
   <Products heading='Choose your favorite' data={productData} />
    <Feature />
  <Products heading='Sweet Treats for You' data={productDataTwo} />
    <Footer />
  </Layout>
)
}

export default IndexPage
