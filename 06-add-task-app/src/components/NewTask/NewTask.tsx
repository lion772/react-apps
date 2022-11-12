import React, { FC, useCallback, useEffect, useState } from "react";
import useHttp from "../../hooks/use-http/use-http";
import Section from "../UI/Section/Section";
import TaskForm from "./TaskForm/TaskForm";

interface NewTaskProps {
    onAddTask: (task: any) => void;
}

const NewTask: FC<NewTaskProps> = (props) => {
    const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

    const enterTaskHandler = (taskText: string) => {
        if (taskText && taskText.trim().length > 0) {
            const requestConfig = {
                url: "https://react-http-movies-feb4c-default-rtdb.firebaseio.com/tasks.json",
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: { text: taskText },
            };
            sendTaskRequest(requestConfig, createTask.bind(null, taskText));
        }
    };

    const createTask = (taskText: string, task: any) => {
        console.log(task, taskText);
        const generatedId = task.name; // firebase-specific => "name" contains generated id
        const createdTask = { id: generatedId, text: taskText };
        console.log(createdTask);

        props.onAddTask(createdTask);
    };

    return (
        <Section>
            <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
            {error && <p>{error}</p>}
        </Section>
    );
};

export default NewTask;

/* const enterTaskHandler = async (taskText: string) => {
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
    }; */
