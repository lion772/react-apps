import React, { useState } from "react";
import "./App.css";
import IUsers from "./components/IUsers";
import NewUser from "./components/NewUser/NewUser";
import Users from "./components/Users/Users";
import User from "./components/IUsers";

function App() {
    const users: User[] = [
        {
            id: "1",
            username: "marcos",
            age: 37,
        },
    ];

    let [usersUpdated, setUsers] = useState<User[]>(users);

    const addUserHandler = (user: IUsers) => {
        setUsers((previousUsers): User[] => [
            { ...user, id: String(previousUsers.length + 1) },
            ...previousUsers,
        ]);
    };

    return (
        <>
            <div className="App">
                <NewUser getUser={addUserHandler} />
                <Users users={usersUpdated} />
            </div>
        </>
    );
}

export default App;
