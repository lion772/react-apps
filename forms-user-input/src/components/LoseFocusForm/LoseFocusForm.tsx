import { FormEvent, useEffect, useRef, useState } from "react";

const SimpleInput = () => {
    const nameInputRef = useRef();
    const [enteredName, setEnteredName] = useState("");
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    useEffect(() => {
        if (enteredNameIsValid) {
            console.log("Name Input is valid!");
        }
    }, [enteredNameIsValid]);

    const nameInputChangeHandler = (event: FormEvent<HTMLInputElement>) => {
        setEnteredName(event.currentTarget.value);
    };

    const nameInputBlurHandler = (event: FormEvent<HTMLInputElement>) => {
        setEnteredNameTouched(true);

        if (enteredName.trim() === "") {
            setEnteredNameIsValid(false);
            return;
        }
    };

    const formSubmissionHandler = (event: React.SyntheticEvent) => {
        event.preventDefault();

        setEnteredNameTouched(true);

        if (enteredName.trim() === "") {
            setEnteredNameIsValid(false);
            return;
        }

        setEnteredNameIsValid(true);

        console.log(enteredName);

        // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
        setEnteredName("");
    };

    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

    const nameInputClasses = nameInputIsInvalid
        ? "form-control invalid"
        : "form-control";

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={nameInputChangeHandler}
                    onBlur={nameInputBlurHandler}
                    value={enteredName}
                />
                {nameInputIsInvalid && (
                    <p className="error-text">Name must not be empty.</p>
                )}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
