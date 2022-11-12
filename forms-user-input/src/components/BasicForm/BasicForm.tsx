import React, { FC, FormEventHandler, useRef } from "react";
import styles from "./BasicForm.module.css";

interface BasicFormProps {}

const BasicForm: FC<BasicFormProps> = () => {
    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);

    const onSubmitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        console.log(firstNameRef.current?.value);
        console.log(lastNameRef.current?.value);
        console.log(emailRef.current?.value);
    };
    return (
        <form onSubmit={onSubmitHandler}>
            <div className="control-group">
                <div className="form-control">
                    <label htmlFor="name">First Name</label>
                    <input type="text" id="name" ref={firstNameRef} />
                </div>
                <div className="form-control">
                    <label htmlFor="name">Last Name</label>
                    <input type="text" id="name" ref={lastNameRef} />
                </div>
            </div>
            <div className="form-control">
                <label htmlFor="name">E-Mail Address</label>
                <input type="text" id="name" ref={emailRef} />
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
