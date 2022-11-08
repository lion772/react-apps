import React, { FC, PropsWithChildren } from "react";
import styles from "./Card.module.css";

const Card: FC<PropsWithChildren> = ({ children }) => (
    <div className={styles.card}>{children}</div>
);

export default Card;
