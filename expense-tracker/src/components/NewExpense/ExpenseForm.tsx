import React, { FC, useState } from "react";
import styles from "./NewExpense.module.css";

interface ExpenseFormProps {}

const ExpenseForm: FC<ExpenseFormProps> = () => {
    const [title, setTitle] = useState<string>("");
    const [date, setDate] = useState<string>("");
    const [amount, setAmount] = useState<string>("");

    /*const [userInput, setUserInput] = useState({
        expenseName: "",
        date: "",
        amount: "",
    });*/

    const titleChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        //setUserInput({ ...userInput, expenseName: e.currentTarget.value });
        setTitle(e.currentTarget.value);
    };
    const dateChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        //setUserInput({ ...userInput, expenseName: e.currentTarget.value });
        setDate(e.currentTarget.value);
    };
    const amountChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        //setUserInput({ ...userInput, expenseName: e.currentTarget.value });
        setAmount(e.currentTarget.value);
    };

    const submitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        /* 1° way of getting form data:
        const target = e.target as typeof e.target & {
            title: { value: string };
            date: { value: string };
            amount: { value: string };
        };
        const titleFormValue = target.title.value;
        const dateFormValue = target.date.value;
        const amountFormValue = target.amount.value;
        console.log(titleFormValue, dateFormValue, amountFormValue);*/

        //2° way of getting form data:
        const expenseData = {
            title: title,
            date: new Date(date),
            amount: amount,
        };
        console.log(expenseData);
    };

    return (
        <form onSubmit={(e) => submitHandler(e)}>
            <div className={styles.NewExpense__controls}>
                <div className={styles.NewExpense__control}>
                    <label>Title</label>
                    <input
                        name="title"
                        type="text"
                        onChange={(e) => titleChangeHandler(e)}
                    />
                </div>
                <div className={styles.NewExpense__control}>
                    <label>Amount</label>
                    <input
                        name="amount"
                        type="number"
                        min="0.01"
                        step="0.01"
                        onChange={(e) => amountChangeHandler(e)}
                    />
                </div>
                <div className={styles.NewExpense__control}>
                    <label>Date</label>
                    <input
                        name="date"
                        type="date"
                        min="2019-01-01"
                        max="2024-12-31"
                        onChange={(e) => dateChangeHandler(e)}
                    />
                </div>
            </div>
            <button className={`styles.NewExpense button`} type="submit">
                Add new expense
            </button>
        </form>
    );
};

export default ExpenseForm;
