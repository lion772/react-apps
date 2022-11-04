import React, { FC, ReactNode } from "react";
import styles from "./Card.module.css";

interface CardProps {
    children: ReactNode;
    className: string;
}

const Card: FC<CardProps> = ({ children, className }) => {
    const classesAssembled = `${styles.Card} ${className}`;
    return <div className={classesAssembled}>{children}</div>;
};

export default Card;
