import React, { FC } from "react";
import styles from "./Header.module.css";
import { authActions } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
    const isAuthenticated = useSelector(
        (state: any) => state.auth.isAuthenticated
    );
    const dispatch = useDispatch();

    function logout() {
        dispatch(authActions.logout());
    }

    return (
        <header className={styles.header}>
            <h1>Redux Auth</h1>
            {isAuthenticated && (
                <nav>
                    <ul>
                        <li>
                            <a href="/">My Products</a>
                        </li>
                        <li>
                            <a href="/">My Sales</a>
                        </li>
                        <li>
                            <button onClick={logout}>Logout</button>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
