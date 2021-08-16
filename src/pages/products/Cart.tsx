import React from "react";
import { useHistory } from "react-router-dom";
import { CartDiv } from '../../components/products';
import CartCard from '../../components/products/CartCard';
import { Button } from '../../components/shared/StyledComponents';
import { ActionDiv } from '../../components/products';

const Cart = () => {
    const history = useHistory()
    const products = [
        {
        "guid": "13085ace-fd17-4514-426fd45823cd",
        "name": "Biolive",
        "price": 8555,
        "picture": "http://placehold.it/32x32",
        "description": "Cillum consectetur ullamco non veniam id aute culpa Lorem exercitation qui ut do. Sunt ullamco reprehenderit fugiat nostrud officia incididunt excepteur labore irure non est. Excepteur nulla non elit eiusmod ad fugiat id reprehenderit do eu voluptate ea cupidatat. Do et irure ex in occaecat commodo reprehenderit duis. Occaecat non ex ullamco veniam consectetur culpa cillum labore ut proident aliqua ullamco elit esse.\r\n"
    },
    {
        "guid": "13085ace-fd17-4514-426fd4582pp3cd",
        "name": "Biolive",
        "price": 8555,
        "picture": "http://placehold.it/32x32",
        "description": "Cillum consectetur ullamco non veniam id aute culpa Lorem exercitation qui ut do. Sunt ullamco reprehenderit fugiat nostrud officia incididunt excepteur labore irure non est. Excepteur nulla non elit eiusmod ad fugiat id reprehenderit do eu voluptate ea cupidatat. Do et irure ex in occaecat commodo reprehenderit duis. Occaecat non ex ullamco veniam consectetur culpa cillum labore ut proident aliqua ullamco elit esse.\r\n"
    }
]
const total = 36000

    return (
        <CartDiv>
            <h3>Cart ({2} items)</h3>
            {products.map(product => {
                return (
                    <CartCard
                        key={product.guid}
                        product={product}
                    />
                )
            })}
            <h2 className="total">Total: <b>${total.toLocaleString()}</b></h2>
            <ActionDiv>
                <Button
                    className="continue"
                    onClick={() => history.push("/products")}
                >
                    CONTINUE SHOPPING
                </Button>
                <Button
                    className="checkout"
                >
                    CHECKOUT
                </Button>
            </ActionDiv>
        </CartDiv>
    )
}

export default Cart