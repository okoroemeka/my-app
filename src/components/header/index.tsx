import React from "react";
import { Header } from '../shared/StyledComponents';
import { Button } from '../shared/StyledComponents';
import CartIcon from '../../images/cart.png';
import { useHistory } from "react-router-dom";

const HeaderSection = () => {
    const history = useHistory()
    return (
        <Header>
            <div className="wrapper">
                <h1>SHoPinGa</h1>
                <ul>
                    <li>
                        <Button>Logout</Button>
                    </li>
                    <li className="cart" onClick={() => history.push("/cart")}>
                        <span className="items">3</span>
                        <img src={CartIcon} alt="cart"/>
                        <span>Cart</span>
                    </li>
                </ul>
            </div>
        </Header>
    );
};

export default HeaderSection;
