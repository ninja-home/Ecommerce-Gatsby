import React, { useState, useContext } from "react"
import priceFormat from '../utils/PriceFormat';

import CartContext from "../Context"
import {
  Tag,
  ButtonAdd,
  StyledProductDetail,
  QtySelect,
  ProductDetailsImg,
} from "../styles/Components"
import SEO from "./seo"
import Stars from "./Stars"
import Footer from '../components/Footer';
import {Link} from "gatsby";
const ProductDetails = ({
  id,
  unit_amount,
  product: { name, metadata },
}) => {
  const price = priceFormat(unit_amount)
  const [quantity, setQuantity] = useState(1)
  const addToCart = useContext(CartContext) 

  const handleSubmit = () => {
    addToCart({ id, name, price:unit_amount, metadata, quantity })
  }
  return (
    <div>    
  <StyledProductDetail>
      <SEO title={name} />
      <ProductDetailsImg src={metadata.img} alt={name} />
      <div>
        <Tag>Popular</Tag>
        <h2>{name}</h2>
        <b>USD{price}</b>
        <Stars />
        {metadata.wear && <h3>Color: {metadata.wear.color}</h3>}
        <small>{metadata.description}</small> 
        <p>Quantity:</p>
        <QtySelect>
          <button
            onClick={() => (quantity > 1 ? setQuantity(quantity - 1) : null)}
          >
            -
          </button>
          <input type="text" disabled value={quantity} />
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </QtySelect>
        <ButtonAdd onClick={handleSubmit}>Add to cart</ButtonAdd>
      
        <Link to="/Cart/">
          <ButtonAdd css={`
            margin-left: 3rem;
            margin-top: 2rem;
            font-size: 1rem; 
            `}>
          <span>
          <img src="https://i.postimg.cc/L6wpMxLt/cart.png" alt="cart" />
          </span>
       
        </ButtonAdd>
         
        </Link> 
      </div>
    </StyledProductDetail>      
      <Footer 
       />
   </div>

  )
}

export default ProductDetails
