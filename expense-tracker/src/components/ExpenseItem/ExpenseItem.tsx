import { FC } from "react";
import ExpenseDate from "./ExpenseDate";
import style from "./ExpenseItem.module.css";
import IExpenseProps from "./IExpenseItem";

const ExpenseItem: FC<IExpenseProps> = (props): JSX.Element => {
    return (
        <div className={style.ExpenseItem}>
            <div className={style.ExpenseItem__description}>
                <ExpenseDate date={props.date} />
                <h2>{props.title}</h2>
                <div className={style.ExpenseItem__price}>${props.amount}</div>
            </div>
        </div>
    );
};

export default ExpenseItem;
