import React from "react";
import { Button } from '../../components/shared/StyledComponents';
import { ProductDetailsDiv } from '../../components/products';

const ProductDetails = () => {
    const product = {
        "guid": "13085ace-fd17-4514-426fd45823cd",
        "name": "Biolive",
        "price": 8555,
        "picture": "http://placehold.it/32x32",
        "description": "Cillum consectetur ullamco non veniam id aute culpa Lorem exercitation qui ut do. Sunt ullamco reprehenderit fugiat nostrud officia incididunt excepteur labore irure non est. Excepteur nulla non elit eiusmod ad fugiat id reprehenderit do eu voluptate ea cupidatat. Do et irure ex in occaecat commodo reprehenderit duis. Occaecat non ex ullamco veniam consectetur culpa cillum labore ut proident aliqua ullamco elit esse.\r\n"
    }

    return (
        <ProductDetailsDiv>
            <img src={product.picture} alt="product"/>
            <div>
                <h2>{product.name}</h2>
                <b>${product.price.toLocaleString()}</b>
                <p>{product.description}</p>
                <Button>ADD TO CART</Button>
            </div>
        </ProductDetailsDiv>
    )
}

export default ProductDetails