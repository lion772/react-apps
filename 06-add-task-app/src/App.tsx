import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import NewTask from "./components/NewTask/NewTask";
import Tasks from "./components/Tasks/Tasks";
import useHttp from "./hooks/use-http/use-http";

const requestConfig = {
    url: "https://react-http-movies-feb4c-default-rtdb.firebaseio.com/tasks.json",
};

function App() {
    const [tasks, setTasks] = useState<any>([]);

    const { isLoading, error, sendRequest: fetchTasks } = useHttp();

    useEffect(() => {
        const transformedTasks = (tasks: any) => {
            const loadedTasks = [];
            for (const key in tasks) {
                loadedTasks.push({ id: key, text: tasks[key].text });
            }
            setTasks(loadedTasks);
        };
        fetchTasks(requestConfig, transformedTasks);
    }, [fetchTasks]);

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
                onFetch={() => fetchTasks}
            />
        </React.Fragment>
    );
}

export default App;
