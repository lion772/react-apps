import React, { FC } from "react";
import ExpenseForm from "./ExpenseForm";
import IExpenseFunction from "./IExpenseFunction";
import styles from "./NewExpense.module.css";



const NewExpense: FC<IExpenseFunction> = ({ getExpense }) => {
    return (
        <div className={styles.NewExpense}>
            <ExpenseForm getExpense={getExpense} />
        </div>
    );
};

export default NewExpense;
