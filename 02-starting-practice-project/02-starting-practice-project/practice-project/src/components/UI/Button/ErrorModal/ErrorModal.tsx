import React, { FC, Fragment, MouseEventHandler } from "react";
import Button from "../Button";
import styles from "./ErrorModal.module.css";

interface ErrorModalProps {
    title: string;
    message: string;
    onClickHandler: MouseEventHandler<HTMLElement> | undefined;
}

const Backdrop = () => {
    return <div className={styles.backdrop}> </div>;
};

const ModalOverlay: FC<ErrorModalProps> = ({
    title,
    message,
    onClickHandler,
}) => {
    return (
        <>
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
        </>
    );
};

const ErrorModal: FC<ErrorModalProps> = ({
    title,
    message,
    onClickHandler,
}) => {
    return (
        <Fragment>
            <Backdrop />
            <ModalOverlay
                title={title}
                message={message}
                onClickHandler={onClickHandler}
            />
        </Fragment>
    );
};

export default ErrorModal;
