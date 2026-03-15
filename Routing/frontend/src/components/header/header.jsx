import React from "react";
import { NavLink, Link } from "react-router-dom";
import * as styles from "./header.css";
import logo from '@assets/book.svg';


const Header = () => {
    return (
        <header>
            <div>
                <NavLink to="/">
                    <img src={logo} />
                </NavLink>
            </div>
        </header>
    );
};

export default Header;