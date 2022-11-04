import React, { FC, MouseEventHandler, useState } from "react";
import styles from "./UserForm.module.css";
import Button from "../../UI/Button/Button";
import ErrorModal from "../../UI/Button/ErrorModal/ErrorModal";
import Card from "../../Users/Card/Card";

interface UserFormProps {
    getUserEntered: Function;
}

const UserForm: FC<UserFormProps> = ({ getUserEntered }) => {
    const [usernameEntered, setUsername] = useState<string>("");
    const [passwordEntered, setPassword] = useState<string>("");
    const [isValid, setIsValid] = useState<boolean>(true);

    const onUsernameChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        //console.log(e.currentTarget.value);
        setUsername(e.currentTarget.value);
    };
    const onAgeChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        //console.log(e.currentTarget.value);
        setPassword(e.currentTarget.value);
        setIsValid(true);
    };
    const onSubmitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        console.log(usernameEntered, passwordEntered);
        if (usernameEntered.length === 0 || passwordEntered.length === 0) {
            setIsValid(false);
            return;
        }
        getUserEntered({
            username: usernameEntered,
            age: Number(passwordEntered),
        });
        setUsername("");
        setPassword("");
    };

    const showErrorModal = (
        <ErrorModal
            title="An error occured!"
            message="Something went wrong."
            onClickHandler={() => {
                setIsValid(true);
            }}
        />
    );

    return (
        <>
            {!isValid && showErrorModal}

            <div className={styles.input}>
                <form>
                    <div className={styles.UserForm}>
                        <div className={styles.UserForm__controls}>
                            <div className={styles.UserForm__control}>
                                <label htmlFor="username">Username</label>
                                <input
                                    className={styles.UserForm__input}
                                    value={usernameEntered}
                                    name="username"
                                    type="text"
                                    onChange={onUsernameChangeHandler}
                                />
                            </div>
                            <div className={styles.UserForm__control}>
                                <label htmlFor="password">Age</label>
                                <input
                                    className={`${styles.UserForm__control} input`}
                                    value={passwordEntered}
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
            </div>
        </>
    );
};

export default UserForm;
