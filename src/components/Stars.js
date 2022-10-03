import React, { useState } from "react"
import { SelectStars } from "../styles/Components"

const Stars = () => {
  const [stars, setStars] = useState(5)
  return (
    <SelectStars selected={stars}>
      <span aria-hidden="true"  onClick={() => setStars(1)}>★</span>
      <span aria-hidden="true"  onClick={() => setStars(2)}>★</span>
      <span aria-hidden="true"   onClick={() => setStars(3)}>★</span>
      <span aria-hidden="true"  onClick={() => setStars(4)}>★</span>
      <span aria-hidden="true" onClick={() => setStars(5)}>★</span>
    </SelectStars>
  )
}

export default Stars;
