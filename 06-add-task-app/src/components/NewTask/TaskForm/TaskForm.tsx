import React, {
    DetailedHTMLProps,
    FC,
    InputHTMLAttributes,
    MutableRefObject,
    useRef,
} from "react";
import styles from "./TaskForm.module.css";

interface TaskFormProps {
    loading: boolean;
    onEnterTask: (taskText: string) => void;
}

const TaskForm: FC<TaskFormProps> = (props) => {
    let taskInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: { preventDefault: () => void }) => {
        event.preventDefault();

        const enteredValue = taskInputRef.current?.value;

        if (enteredValue && enteredValue.trim().length > 0) {
            props.onEnterTask(enteredValue);
            if (taskInputRef.current) {
                taskInputRef.current.value = "";
            }
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
