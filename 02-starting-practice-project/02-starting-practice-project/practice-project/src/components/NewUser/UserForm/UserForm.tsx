import React, { FC, useRef, useState } from "react";
import styles from "./UserForm.module.css";
import Button from "../../UI/Button/Button";
import ErrorModal from "../../UI/Button/ErrorModal/ErrorModal";
import Wrapper from "../../Helpers/Wrapper";

interface UserFormProps {
    getUserEntered: Function;
}

const UserForm: FC<UserFormProps> = ({ getUserEntered }) => {
    const nameInputRef = useRef<HTMLInputElement>(null);
    const ageInputRef = useRef<HTMLInputElement>(null);

    const [error, setError] = useState<string>("");
    const [isValid, setIsValid] = useState<boolean>(true);

    const onSubmitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const username = nameInputRef.current?.value;
        const age = ageInputRef.current?.value;

        if (age && +age < 1) {
            setIsValid(false);
            setError("Please enter a valid age that is higher than zero.");
            return;
        }

        if (username?.trim().length === 0 || age?.trim().length === 0) {
            setIsValid(false);
            setError(
                "Invalid input - Please enter a valid name and age (non-empty values)."
            );
            return;
        }

        getUserEntered({
            username: username,
            age: Number(age),
        });

        if (nameInputRef.current) nameInputRef.current.value = "";
        if (ageInputRef.current) ageInputRef.current.value = "";
    };

    const showErrorModal = (
        <ErrorModal
            title="An error occured!"
            message={error}
            onClickHandler={() => {
                setIsValid(true);
            }}
        />
    );

    return (
        <Wrapper>
            {!isValid && showErrorModal}

            <div className={styles.input}>
                <form>
                    <div className={styles.UserForm}>
                        <div className={styles.UserForm__controls}>
                            <div className={styles.UserForm__control}>
                                <label htmlFor="username">Username</label>
                                <input
                                    className={styles.UserForm__input}
                                    name="username"
                                    type="text"
                                    ref={nameInputRef}
                                />
                            </div>
                            <div className={styles.UserForm__control}>
                                <label htmlFor="password">Age</label>
                                <input
                                    className={`${styles.UserForm__control} input`}
                                    name="password"
                                    type="number"
                                    ref={ageInputRef}
                                />
                            </div>
                        </div>
                        <Button type="submit" onClick={onSubmitHandler}>
                            Create User
                        </Button>
                    </div>
                </form>
            </div>
        </Wrapper>
    );
};

export default UserForm;
