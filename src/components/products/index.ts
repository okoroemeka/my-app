import styled from 'styled-components';

const maxWidth = `
    max-width: 70%;
    margin: auto;
`
export const ProductsDiv = styled.div`
    ${maxWidth}
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(4, minmax(250px, 1fr));
    grid-gap: 33px 32px;
`;

export const CartDiv = styled.div`
    ${maxWidth}
    b {
        color: #ff912b;
    }
    .total {
        text-align: right;
    }
`;

export const ActionDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 16px;
    border-top: 1px solid #ddd;
    margin: 32px 0;
    button {
        width: 200px;
        margin-left: 32px;
    }
    .continue {
        background: #fff;
        color: #ff912b;
        border: 1px solid #ff912b;
    }
    .checkout {
        background: #ff912b;
    }
`;

export const CartCardDiv = styled.div`
    display: flex;
    border: 1px solid #ddd;
    margin-bottom: 32px;
    border-radius: 6px;
    .desc {
        padding: 32px;
        width: 60%;
        border-right: 1px solid #ddd;
        h2 {
            margin: 0;
        }
        .remove {
            color: #ff912b;
            img {
                height: 16px;
                margin-right: 5px;
            }
        }
        i {
            color: #aaa;
        }
    }
    .price {
        padding: 32px;
    }
    .product-img {
        width: 25%;
    }
`

export const ProductDiv = styled.div`
    width: 100%;
    margin-bottom: 1px;
    img {
        width: 100%;
        border-radius: 6px 6px 0 0;
    }
    .details {
        padding: 16px;
        button {
            background: #ff912b;
        }
        p {
            display: block;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        b {
            font-size: 18px;
        }
    }
    :hover {
        border: 1px solid #ddd;
        border-radius: 6px;
        margin-bottom: 0;
        box-shadow: 4px 4px 8px #ccc;
    }
`; 

export const ProductDetailsDiv = styled.div`
    display: flex;
    ${maxWidth}
    img {
        width: 60%;
        border-radius: 1px solid #eee;
        margin-right: 42px;
    }
    div {
        width: 40%;
        b {
            display: block;
            margin: 32px 0;
        }
    }
    button {
        background: #ff912b;
        margin-top: 42px;
    }
`;