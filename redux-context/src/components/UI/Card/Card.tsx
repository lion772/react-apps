import React, { FC, PropsWithChildren } from "react";
import styles from "./Card.module.css";

interface CardProps {
    style: any;
}

const Card: FC<PropsWithChildren<CardProps>> = (props) => (
    <div className={styles["card"]} style={props.style}>
        {props.children}
    </div>
);

export default Card;
