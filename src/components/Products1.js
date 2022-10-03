import React from "react"
import { Link } from "gatsby"
import formatprice from "../utils/PriceFormat"
import { StyledProducts } from "../styles/Components"

export default function Products({ products }) {
  return (
      <StyledProducts>
      <h2>Products</h2>
      <section>
        {products.map(({ node }) => {
          const price = formatprice(node.price)
          return (
            <Link to={`/${node.id}`}>
              <article key={node.id}>
                <img src={node.product.metadata.img} alt={node.product.name} />
                <p>{node.product.name}</p>
                <small>USD {price}</small>
                <span role="img" aria-label="emoji">Buy now ➡️</span>
              </article>
            </Link>
          )
        })}
      </section>
    </StyledProducts>
  )
}
