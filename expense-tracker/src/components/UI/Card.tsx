import React, { FC } from "react";
import styles from "./Card.module.css";

interface CardProps {
    children: any;
    className: any;
}

const Card: FC<CardProps> = ({ children, className }) => {
    const classes = `styles.Card ${className}`;
    return <div className={classes}>{children}</div>;
};

export default Card;
