import React, { useEffect, useState } from "react";
import "./App.css";
import NewTask from "./components/NewTask/NewTask";
import Tasks from "./components/Tasks/Tasks";

function App() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [tasks, setTasks] = useState<any>([]);

    const fetchTasks = async (taskText: string) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(
                "https://react-http-6b4a6.firebaseio.com/tasks.json"
            );

            if (!response.ok) {
                throw new Error("Request failed!");
            }

            const data = await response.json();

            const loadedTasks = [];

            for (const taskKey in data) {
                loadedTasks.push({ id: taskKey, text: data[taskKey].text });
            }

            setTasks(loadedTasks);
        } catch (err) {
            setError((err as Error).message || "Something went wrong!");
        }
        setIsLoading(false);
    };

    useEffect(() => {
        fetchTasks("abacate");
    }, []);

    const taskAddHandler = (task: any) => {
        setTasks((prevTasks: string | any[]) => prevTasks.concat(task));
    };

    return (
        <React.Fragment>
            <NewTask onAddTask={taskAddHandler} />
            <Tasks
                items={tasks}
                loading={isLoading}
                error={error}
                onFetch={fetchTasks}
            />
        </React.Fragment>
    );
}

export default App;
