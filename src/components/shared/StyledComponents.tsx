import styled from 'styled-components'

export const ParentWrapper = styled.div`
    width: 100vw;
    height: 100%;
    margin: 0;
`;

export const Button = styled.button`
    margin-top: 16px;
    padding: 12px;
    border: none;
    outline: none;
    cursor: pointer;
    width: 100%;
    display: block;
    color: #fff;
    font-size: 16px;
    border-radius: 4px;
`;

export const Header = styled.div`
    box-shadow: 0 4px 4px -4px rgb(0 0 0 / 12%);
    margin-bottom: 32px;
    .wrapper {
        max-width 70%;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        height: 100%;
        img {
            height: 25px;
            margin-bottom: -2px;
            margin-right: 4px;
        }
        ul {
            list-style: none;
            .cart {
                padding: 8px 12px;
            }
            li {
                display: inline-block;
                border-radius: 6px;
                margin-left: 12px;
                position: relative;
                button {
                    margin: 0;
                    background: #ff912b;
                }
                .items {
                    position: absolute;
                    top: 0;
                    left: 20px;
                    height: 20px;
                    text-align: center;
                    width: 20px;
                    color: #fff;
                    border-radius: 50%;
                    background: #ff912b;
                }
                :hover {
                    background: #eee;
                }
            }
        }
    }
`;