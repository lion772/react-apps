import React, { FC, MouseEventHandler } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
    children: any;
    type: any;
    onClick: MouseEventHandler<HTMLElement> | undefined;
}

const Button: FC<ButtonProps> = ({ children, type, onClick }) => {
    return (
        <button
            className={styles.Button}
            type={type || "button"}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
