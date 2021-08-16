import React from "react";
import ProductCard from '../../components/products/ProductCard';
import { ProductsDiv } from '../../components/products';

const Products = () => {
    const data = [
        {
            "guid": "13085ace-fd17-4560-9614-426fd45823cd",
            "name": "Biolive",
            "price": 8555,
            "picture": "http://placehold.it/32x32",
            "description": "Cillum consectetur ullamco non veniam id aute culpa Lorem exercitation qui ut do. Sunt ullamco reprehenderit fugiat nostrud officia incididunt excepteur labore irure non est. Excepteur nulla non elit eiusmod ad fugiat id reprehenderit do eu voluptate ea cupidatat. Do et irure ex in occaecat commodo reprehenderit duis. Occaecat non ex ullamco veniam consectetur culpa cillum labore ut proident aliqua ullamco elit esse.\r\n"
        },
        {
            "guid": "13085ace-fd17-4560-9614-426fd45823ce",
            "name": "Golibe",
            "price": 855,
            "picture": "http://placehold.it/32x32",
            "description": "Cillum consectetur ullamco non veniam id aute culpa Lorem exercitation qui ut do. Sunt ullamco reprehenderit fugiat nostrud officia incididunt excepteur labore irure non est. Excepteur nulla non elit eiusmod ad fugiat id reprehenderit do eu voluptate ea cupidatat. Do et irure ex in occaecat commodo reprehenderit duis. Occaecat non ex ullamco veniam consectetur culpa cillum labore ut proident aliqua ullamco elit esse.\r\n"
        },
        {
            "guid": "13085ace-fd17-4560-9614-426fd4582gce",
            "name": "Biolive",
            "price": 8555,
            "picture": "http://placehold.it/32x32",
            "description": "Cillum consectetur ullamco non veniam id aute culpa Lorem exercitation qui ut do. Sunt ullamco reprehenderit fugiat nostrud officia incididunt excepteur labore irure non est. Excepteur nulla non elit eiusmod ad fugiat id reprehenderit do eu voluptate ea cupidatat. Do et irure ex in occaecat commodo reprehenderit duis. Occaecat non ex ullamco veniam consectetur culpa cillum labore ut proident aliqua ullamco elit esse.\r\n"
        },
        {
            "guid": "13085ace-fd17-4560-961426fd45823cf",
            "name": "Golibe",
            "price": 855,
            "picture": "http://placehold.it/32x32",
            "description": "Cillum consectetur ullamco non veniam id aute culpa Lorem exercitation qui ut do. Sunt ullamco reprehenderit fugiat nostrud officia incididunt excepteur labore irure non est. Excepteur nulla non elit eiusmod ad fugiat id reprehenderit do eu voluptate ea cupidatat. Do et irure ex in occaecat commodo reprehenderit duis. Occaecat non ex ullamco veniam consectetur culpa cillum labore ut proident aliqua ullamco elit esse.\r\n"
        },
        {
            "guid": "13085ace-fd17-4514-426fd45823cd",
            "name": "Biolive",
            "price": 8555,
            "picture": "http://placehold.it/32x32",
            "description": "Cillum consectetur ullamco non veniam id aute culpa Lorem exercitation qui ut do. Sunt ullamco reprehenderit fugiat nostrud officia incididunt excepteur labore irure non est. Excepteur nulla non elit eiusmod ad fugiat id reprehenderit do eu voluptate ea cupidatat. Do et irure ex in occaecat commodo reprehenderit duis. Occaecat non ex ullamco veniam consectetur culpa cillum labore ut proident aliqua ullamco elit esse.\r\n"
        },
        {
            "guid": "1308-fd17-4560-9614-426fd45823ce",
            "name": "Golibe",
            "price": 855,
            "picture": "http://placehold.it/32x32",
            "description": "Cillum consectetur ullamco non veniam id aute culpa Lorem exercitation qui ut do. Sunt ullamco reprehenderit fugiat nostrud officia incididunt excepteur labore irure non est. Excepteur nulla non elit eiusmod ad fugiat id reprehenderit do eu voluptate ea cupidatat. Do et irure ex in occaecat commodo reprehenderit duis. Occaecat non ex ullamco veniam consectetur culpa cillum labore ut proident aliqua ullamco elit esse.\r\n"
        },
        {
            "guid": "13085ace-fd17-4560-9614-426fd2gce",
            "name": "Biolive",
            "price": 8555,
            "picture": "http://placehold.it/32x32",
            "description": "Cillum consectetur ullamco non veniam id aute culpa Lorem exercitation qui ut do. Sunt ullamco reprehenderit fugiat nostrud officia incididunt excepteur labore irure non est. Excepteur nulla non elit eiusmod ad fugiat id reprehenderit do eu voluptate ea cupidatat. Do et irure ex in occaecat commodo reprehenderit duis. Occaecat non ex ullamco veniam consectetur culpa cillum labore ut proident aliqua ullamco elit esse.\r\n"
        },
        {
            "guid": "13085ace-fd17-454-426fd45823cf",
            "name": "Golibe",
            "price": 855,
            "picture": "http://placehold.it/32x32",
            "description": "Cillum consectetur ullamco non veniam id aute culpa Lorem exercitation qui ut do. Sunt ullamco reprehenderit fugiat nostrud officia incididunt excepteur labore irure non est. Excepteur nulla non elit eiusmod ad fugiat id reprehenderit do eu voluptate ea cupidatat. Do et irure ex in occaecat commodo reprehenderit duis. Occaecat non ex ullamco veniam consectetur culpa cillum labore ut proident aliqua ullamco elit esse.\r\n"
        }
    ]

    return (
        <ProductsDiv>
            {data.map(product => {
                return (
                    <ProductCard
                        key={product.guid}
                        product={product}
                    />
                )
            })}
        </ProductsDiv>
    )
}

export default Products