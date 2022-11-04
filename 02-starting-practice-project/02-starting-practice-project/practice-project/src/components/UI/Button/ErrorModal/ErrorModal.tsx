import React, { FC, Fragment, MouseEventHandler } from "react";
import ReactDOM from "react-dom";
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
}): JSX.Element => {
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
            {ReactDOM.createPortal(
                <Backdrop />,
                document.querySelector("#backdrop-root") as Element
            )}
            {ReactDOM.createPortal(
                <ModalOverlay
                    title={title}
                    message={message}
                    onClickHandler={onClickHandler}
                />,
                document.getElementById("overlay-root") as HTMLElement
            )}
        </Fragment>
    );
};

export default ErrorModal;
