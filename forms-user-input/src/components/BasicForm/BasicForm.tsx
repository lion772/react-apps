import React, { FC, FormEvent, useEffect, useState } from "react";

interface BasicFormProps {}

const BasicForm: FC<BasicFormProps> = () => {
    const [firstNameText, setFirstNameText] = useState("");
    const [lastNameText, setLastNameText] = useState("");
    const [emailText, setemailText] = useState("");
    const [errorMessage, setErrorMessage] = useState<Array<string>>([]);
    const [enteredNameIsValidated, setEnteredNameIsValidated] = useState(false);
    const [enteredNameTouched, setenteredNameTouched] = useState(false);

    useEffect(() => {
        if (enteredNameIsValidated) {
            console.log("Inputs are valid!");
        }
    }, [enteredNameIsValidated]);

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

    const onSubmitHandler = (e: React.SyntheticEvent): any => {
        e.preventDefault();
        setenteredNameTouched(true);

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

        if (
            !checkLengthString(emailText) &&
            !checkLengthString(emailText) &&
            !checkLengthString(emailText)
        ) {
            setEnteredNameIsValidated(true);
            //Create an object out of the strings
            console.log(enteredNameIsValidated);
            //reset values
            setFirstNameText("");
            setLastNameText("");
            setemailText("");
        }
    };
    const nameInputIsInvalid = !enteredNameIsValidated && enteredNameTouched;
    const nameInputClass = nameInputIsInvalid
        ? "form-control invalid"
        : "form-control";
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
                {nameInputIsInvalid &&
                    errorMessage.map((msg) => <h3>{msg}</h3>)}
            </form>
        </>
    );
};

export default BasicForm;
