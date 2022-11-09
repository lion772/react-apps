import React, { FC, PropsWithChildren } from "react";
import styles from "./TaskItem.module.css";

interface TaskItemProps {}

const TaskItem: FC<PropsWithChildren<TaskItemProps>> = ({ children }) => (
    <li className={styles.task}>{children}</li>
);

export default TaskItem;
