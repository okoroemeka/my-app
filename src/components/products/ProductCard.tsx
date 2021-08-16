/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
import React from "react";
import { ProductDiv } from './index';
import { Button } from '../shared/StyledComponents'

interface Product {
  guid?: string;
  name?: string;
  price?: number;
  description?: string;
  picture?: string;
}

const ProductCard = ( { product } : Product) => {
  return (
    <ProductDiv>
        <img src={product.picture} alt="product"/>
        <div className="details">
          <b>{product.name}</b>
          <p>{product.description}</p>
          <b>${product.price.toLocaleString()}</b>
          <Button>ADD TO CART</Button>
        </div>
    </ProductDiv>
  );
};

export default ProductCard;
