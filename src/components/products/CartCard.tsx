/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
import React from "react";
import { CartCardDiv } from './index';
import DeleteIcon from '../../images/delete.svg';

interface Product {
  name?: string;
  price?: number;
  description?: string;
  picture?: string;
}

const CartCard = ( { product } : Product) => {
  return (
    <CartCardDiv>
        <img className="product-img" src={product.picture} alt="product"/>
        <div className="desc">
          <h2>{product.name}</h2>
          <i>Quantity: <b>1</b></i>
          <p>{product.description}</p>
          <b className="remove"><img src={DeleteIcon} alt="delete" />Remove</b>
        </div>
        <b className="price">${product.price.toLocaleString()}</b>
    </CartCardDiv>
  );
};

export default CartCard;
