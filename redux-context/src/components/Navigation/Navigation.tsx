import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

import "./Navigation.css";

const Navigation = () => {
    return (
        <header className={styles["main-header"]}>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" exact>
                            All Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/favorites">Favorites</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navigation;
