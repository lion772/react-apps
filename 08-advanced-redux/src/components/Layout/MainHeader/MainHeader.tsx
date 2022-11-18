import React, { FC } from "react";
import CartButton from "../../Cart/CartButton/CartButton";
import styles from "./MainHeader.module.css";

interface MainHeaderProps {}

const MainHeader: FC<MainHeaderProps> = () => {
    return (
        <header className={styles.header}>
            <h1>ReduxCart</h1>
            <nav>
                <ul>
                    <li>
                        <CartButton />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;
