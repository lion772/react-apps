import React, { useEffect, useState } from "react";
import "./App.css";
import NewTask from "./components/NewTask/NewTask";
import TaskItem from "./components/Tasks/TaskItem/TaskItem";
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
            let loadedTasks = [];
            for (const key in tasks) {
                loadedTasks.push({ id: key, text: tasks[key].text });
            }

            setTasks(loadedTasks.reverse());
        };
        fetchTasks(requestConfig, transformedTasks);
    }, [fetchTasks]);

    const taskAddHandler = (task: any) => {
        setTasks((prevTasks: any) => [
            { id: task.id, text: task.text },
            ...prevTasks,
        ]);
        //console.log(tasks);
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
