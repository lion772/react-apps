import { fireEvent } from "@testing-library/react";
import React, { FC, MouseEventHandler, useState } from "react";
import Card from "../../../Users/Card/Card";
import Button from "../Button";
import styles from "./ErrorModal.module.css";

interface ErrorModalProps {
    title: string;
    message: string;
    onClickHandler: MouseEventHandler<HTMLElement> | undefined;
}

const ErrorModal: FC<ErrorModalProps> = ({
    title,
    message,
    onClickHandler,
}) => {
    return (
        <div className={styles.backdrop}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <h2>{title}</h2>
                </div>

                <div className={styles.content}>
                    <p>{message}</p>
                </div>

                <footer className={styles.actions}>
                    <Button type={"button"} onClick={onClickHandler}>
                        Okay
                    </Button>
                </footer>
            </div>
        </div>
    );
};

export default ErrorModal;
