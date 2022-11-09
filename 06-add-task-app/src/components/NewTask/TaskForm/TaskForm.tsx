import React, { FC, useRef } from "react";
import styles from "./TaskForm.module.css";

interface TaskFormProps {
    loading: boolean;
    onEnterTask: (taskText: string) => void;
}

type TaskRef = HTMLInputElement | null;

const TaskForm: FC<TaskFormProps> = (props) => {
    let taskInputRef = useRef<TaskRef>(null);

    const submitHandler = (event: { preventDefault: () => void }) => {
        event.preventDefault();

        const enteredValue = taskInputRef.current?.value;

        if (enteredValue && enteredValue.trim().length > 0) {
            props.onEnterTask(enteredValue);
            //taskInputRef.current?.value = "";
        }
    };

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <input type="text" ref={taskInputRef} />
            <button>{props.loading ? "Sending..." : "Add Task"}</button>
        </form>
    );
};

export default TaskForm;
