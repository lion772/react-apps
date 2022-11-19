import React, { FC } from "react";
import styles from "./Notification.module.css";

interface NotificationProps {
    status: string;
    title: string;
    message: string;
}

const Notification: FC<NotificationProps> = (props) => {
    let specialClasses = "";

    if (props.status === "error") {
        specialClasses = styles.error;
    }
    if (props.status === "success") {
        specialClasses = styles.success;
    }

    const cssClasses = `${styles.notification} ${specialClasses}`;

    return (
        <section className={cssClasses}>
            <h2>{props.title}</h2>
            <p>{props.message}</p>
        </section>
    );
};

export default Notification;
