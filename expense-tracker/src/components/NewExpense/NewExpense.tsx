import React, { FC } from "react";
import ExpenseForm from "./ExpenseForm";
import styles from "./NewExpense.module.css";

interface NewExpenseProps {}

const NewExpense: FC<NewExpenseProps> = () => {

    return (
        <div className={styles.NewExpense}>
            <ExpenseForm />
        </div>
    );
};

export default NewExpense;
