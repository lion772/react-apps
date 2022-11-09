import React, { FC } from "react";
import TaskItem from "./TaskItem/TaskItem";
import styles from "./Tasks.module.css";

interface TasksProps {
    items: any;
    loading: boolean;
    error: string | null;
    onFetch: (taskText: string) => void;
}

const Tasks: FC<TasksProps> = (props) => {
    let taskList = <h2>No tasks found. Start adding some!</h2>;

    if (props.items.length > 0) {
        taskList = (
            <ul>
                {props.items.map(
                    (task: { id: React.Key | null | undefined; text: any }) => (
                        <TaskItem key={task.id}>{task.text}</TaskItem>
                    )
                )}
            </ul>
        );
    }

    let content = taskList;

    if (props.error) {
        content = <button onClick={props.onFetch}>Try again</button>;
    }

    if (props.loading) {
        content = "Loading tasks...";
    }

    return (
        <Section>
            <div className={classes.container}>{content}</div>
        </Section>
    );
};

export default Tasks;
