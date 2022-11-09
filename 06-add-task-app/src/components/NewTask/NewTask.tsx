import React, { FC, useState } from "react";
import Section from "../UI/Section/Section";
import TaskForm from "./TaskForm/TaskForm";

interface NewTaskProps {
    onAddTask: (task: any) => void;
}

const NewTask: FC<NewTaskProps> = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const enterTaskHandler = async (taskText: string) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(
                "https://react-http-movies-feb4c-default-rtdb.firebaseio.com/tasks.json",
                {
                    method: "POST",
                    body: JSON.stringify({ text: taskText }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            if (!response.ok) {
                throw new Error("Request failed!");
            }

            const data = await response.json();
            console.log(data);

            const generatedId = data.name; // firebase-specific => "name" contains generated id
            const createdTask = { id: generatedId, text: taskText };

            props.onAddTask(createdTask);
        } catch (err) {
            setError((err as Error).message || "Something went wrong!");
        }
        setIsLoading(false);
    };

    return (
        <Section>
            <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
            {error && <p>{error}</p>}
        </Section>
    );
};

export default NewTask;
