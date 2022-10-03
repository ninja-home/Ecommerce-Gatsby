import React from "react"

import ProductDetails from "../components/ProductDetails"

export default function Product({ pageContext }) {
  return <ProductDetails {...pageContext} />
}
