import React, { FC, FormEvent, useEffect, useState } from "react";

function displayErrorMsg(name: string): string {
    return name[0].toUpperCase() + name.slice(1) + " must not be empty.";
}

interface InputProps {
    inputName: string;
    onChange: (nameEntered: string) => void;
    onBlur: (isBoolean: boolean) => void;
    onSubmitted: boolean;
    onSubmitReset: () => void;
}

const UseInput: FC<InputProps> = (props) => {
    const { inputName, onSubmitReset, onSubmitted } = props;
    const [enteredValue, setEnteredName] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid =
        inputName === "name"
            ? enteredValue.trim() !== ""
            : enteredValue.includes("@");
    const nameInputIsInvalid = !valueIsValid && isTouched;

    useEffect(() => {
        if (onSubmitted) {
            setEnteredName("");
            setIsTouched(false);
            onSubmitReset();
        }
    }, [onSubmitReset, onSubmitted]);

    const valueChangeHandler = (event: FormEvent<HTMLInputElement>) => {
        setEnteredName(event.currentTarget.value);
        props.onChange(event.currentTarget.value);
    };

    const valueBlurHandler = (event: FormEvent<HTMLInputElement>) => {
        setIsTouched(true);
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
                onChange={valueChangeHandler}
                onBlur={valueBlurHandler}
                value={enteredValue}
            />
            {nameInputIsInvalid && (
                <p className="error-text">{`${displayErrorMsg(inputName)} `}</p>
            )}
        </div>
    );
};

export default UseInput;
