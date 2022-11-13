import React, { FC, FormEvent, useEffect, useState } from "react";

function displayErrorMsg(name: string): string {
    return name[0].toUpperCase() + name.slice(1) + " must not be empty.";
}

interface InputProps {
    inputName: string;
    type: string;
    onChange: (nameEntered: string) => void;
    onBlur: (isBoolean: boolean) => void;
    onSubmitted: boolean;
    onSubmitReset: (reset: boolean) => void;
}

const UseInput: FC<InputProps> = (props) => {
    const { inputName, onSubmitReset, onSubmitted } = props;
    const [enteredName, setEnteredName] = useState("");
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    const getReset = (resetName: any, resetTouch: boolean) => {};

    const enteredNameIsValid =
        inputName === "name"
            ? enteredName.trim() !== ""
            : enteredName.includes("@");
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

    useEffect(() => {
        if (onSubmitted) {
            setEnteredName("");
            setEnteredNameTouched(false);
            onSubmitReset(true);
        }
    }, [onSubmitted]);

    const nameInputChangeHandler = (event: FormEvent<HTMLInputElement>) => {
        setEnteredName(event.currentTarget.value);
        props.onChange(event.currentTarget.value);
    };

    const nameInputBlurHandler = (event: FormEvent<HTMLInputElement>) => {
        setEnteredNameTouched(true);
        props.onBlur(true);
    };

    const nameInputClasses = nameInputIsInvalid
        ? "form-control invalid"
        : "form-control";

    return (
        <div className={nameInputClasses}>
            <label htmlFor={inputName}>Your {inputName}</label>
            <input
                type={inputName === "name" ? "name" : "email"}
                id={inputName}
                onChange={nameInputChangeHandler}
                onBlur={nameInputBlurHandler}
                value={enteredName}
            />
            {/* {nameInputIsInvalid && (
                <p className="error-text">{`${displayErrorMsg(inputName)} `}</p>
            )} */}
        </div>
    );
};

export default UseInput;
