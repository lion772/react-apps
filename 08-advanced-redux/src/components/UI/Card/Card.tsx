import React, { FC, ReactNode } from "react";
import styles from "./Card.module.css";

interface CardProps {
    children?: ReactNode | undefined;
    className?: string | undefined;
}

const Card: FC<CardProps> = (props) => {
    const classes = `${styles.card} ${props.className ? props.className : ""}`;
    return <section className={classes}>{props.children}</section>;
};

export default Card;
