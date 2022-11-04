import React, { FC, MouseEventHandler, ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
    children: ReactNode;
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
