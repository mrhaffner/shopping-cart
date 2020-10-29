import React from 'react';
import { Link } from "react-router-dom";

const Navbar = (props) => {
    const { getNumItems } = props;
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
                <li>
                    <Link to="/cart">Cart Total: {getNumItems()}</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;