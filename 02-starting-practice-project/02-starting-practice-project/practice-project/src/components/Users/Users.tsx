import React, { FC } from "react";
import styles from "./Users.module.css";
import User from "../IUsers";
import Card from "./Card/Card";
import UsersItem from "./UsersItem/UsersItem";

interface UsersProps {
    users: User[];
}

const Users: FC<UsersProps> = ({ users }) => {
    console.log(users);
    const iterateOverUsers = users.map((user) => {
        return (
            <UsersItem key={user.id} username={user.username} age={user.age} />
        );
    });
    return <Card className={styles.Users}>{iterateOverUsers}</Card>;
};

export default Users;
