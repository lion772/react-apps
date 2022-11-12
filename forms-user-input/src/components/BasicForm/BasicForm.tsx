import React, { FC, FormEvent, useState } from "react";

interface BasicFormProps {}

const BasicForm: FC<BasicFormProps> = () => {
    const [firstNameText, setFirstNameText] = useState<string>("");
    const [lastNameText, setLastNameText] = useState<string>("");
    const [emailText, setemailText] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<Array<string>>([]);
    const [enteredNameIsValidated, setEnteredNameIsValidated] =
        useState<boolean>(true);

    const checkLengthString = (str: string) => str.trim() === "";

    const onChangeFirstNameHandler = (e: FormEvent<HTMLInputElement>) => {
        setFirstNameText(e.currentTarget.value);
    };
    const onChangeLastNameHandler = (e: FormEvent<HTMLInputElement>) => {
        setLastNameText(e.currentTarget.value);
    };
    const onChangeEmailHandler = (e: FormEvent<HTMLInputElement>) => {
        setemailText(e.currentTarget.value);
    };

    const onSubmitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (checkLengthString(firstNameText)) {
            setEnteredNameIsValidated(false);

            errorMessage.findIndex(
                (el) => el === "Please enter a valid first name."
            ) === -1 &&
                setErrorMessage((previousState) => [
                    ...previousState,
                    "Please enter a valid first name.",
                ]);
        }
        if (checkLengthString(lastNameText)) {
            setEnteredNameIsValidated(false);

            errorMessage.findIndex(
                (el) => el === "Please enter a valid last name."
            ) === -1 &&
                setErrorMessage((previousState) => [
                    ...previousState,
                    "Please enter a valid last name.",
                ]);
        }
        if (checkLengthString(emailText)) {
            setEnteredNameIsValidated(false);

            errorMessage.findIndex(
                (el) => el === "Please enter a valid email."
            ) === -1 &&
                setErrorMessage((previousState) => [
                    ...previousState,
                    "Please enter a valid email.",
                ]);
        }
        //Create an object out of the strings
        console.log(enteredNameIsValidated);
        //reset values
        setFirstNameText("");
        setLastNameText("");
        setemailText("");
    };
    const nameInputClass = enteredNameIsValidated
        ? "form-control"
        : "form-control invalid";
    return (
        <>
            <form onSubmit={onSubmitHandler}>
                <div className="control-group">
                    <div className={nameInputClass}>
                        <label htmlFor="name">First Name</label>
                        <input
                            type="text"
                            id="name"
                            value={firstNameText}
                            onChange={onChangeFirstNameHandler}
                        />
                    </div>
                    <div className={nameInputClass}>
                        <label htmlFor="name">Last Name</label>
                        <input
                            type="text"
                            id="name"
                            value={lastNameText}
                            onChange={onChangeLastNameHandler}
                        />
                    </div>
                </div>
                <div className={nameInputClass}>
                    <label htmlFor="name">E-Mail Address</label>
                    <input
                        type="text"
                        id="name"
                        value={emailText}
                        onChange={onChangeEmailHandler}
                    />
                </div>
                <div className="form-actions">
                    <button>Submit</button>
                </div>
                {!enteredNameIsValidated &&
                    errorMessage.map((msg) => <h3>{msg}</h3>)}
            </form>
        </>
    );
};

export default BasicForm;
