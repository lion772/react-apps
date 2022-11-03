import React, { FC, useState } from "react";
import styles from "./UserForm.module.css";
import Button from "../../UI/Button/Button";

interface UserFormProps {
    getUserEntered: Function;
}

const UserForm: FC<UserFormProps> = ({ getUserEntered }) => {
    const [usernameEntered, setUsername] = useState("");
    const [passwordEntered, setPassword] = useState("");

    const onUsernameChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        //console.log(e.currentTarget.value);
        setUsername(e.currentTarget.value);
    };
    const onAgeChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        //console.log(e.currentTarget.value);
        setPassword(e.currentTarget.value);
    };
    const onSubmitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        console.log(usernameEntered, passwordEntered);
        getUserEntered({
            username: usernameEntered,
            age: Number(passwordEntered),
        });

        //TODO: use callback function to lift the data up here
    };

    return (
        <form>
            <div className={styles.UserForm}>
                <div className={styles.UserForm__controls}>
                    <div className={styles.UserForm__control}>
                        <label htmlFor="username">Username</label>
                        <input
                            className={styles.UserForm__input}
                            name="username"
                            type="text"
                            onChange={onUsernameChangeHandler}
                        />
                    </div>
                    <div className={styles.UserForm__control}>
                        <label htmlFor="password">Age</label>
                        <input
                            className={`${styles.UserForm__control} input`}
                            name="password"
                            type="number"
                            onChange={onAgeChangeHandler}
                        />
                    </div>
                </div>
                <Button type="submit" onClick={onSubmitHandler}>
                    Create User
                </Button>
            </div>
        </form>
    );
};

export default UserForm;
