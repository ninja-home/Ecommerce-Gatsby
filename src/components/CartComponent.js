import React, {  useEffect, useState } from "react"
import { Link } from "gatsby"
import { Button, StyledCart } from "./../styles/Components"
import priceFormat from "../utils/PriceFormat"

import CartContext from "../Context"
import {useCallback} from "react"
import {GlobalStyle} from "./styles/globalStyles"

const CartComponent = () => {

  
    return (
    <StyledCart>
      <GlobalStyle />
      <h2>Shop Cart</h2>
      <table>
        <tbody>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
                 </tbody>
      </table>
      <nav>
        <div>
          <h3 >Subtotal</h3>
          <small>USD: </small>
        </div>
        <div>
          <Link to="/Canceled">
            <Button  type="outline">Back</Button>
          </Link>
          <Link to="/Thanks">
          <Button >
            Buy
          </Button>
            </Link>
        </div>
      </nav>
    </StyledCart>    )
}

export default CartComponent
