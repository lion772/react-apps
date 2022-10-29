import { FC } from "react";
import style from "./ExpenseItem.module.css";
import IExpenseProps from "./IExpenseItem";

const ExpenseItem: FC<IExpenseProps> = ({
    date,
    title,
    amount,
}): JSX.Element => {
    return (
        <div className={style.ExpenseItem}>
            <div>{date}</div>
            <div className={style.ExpenseItem__description}>
                <h2>{title}</h2>
                <div className={style.ExpenseItem__price}>${amount}</div>
            </div>
        </div>
    );
};

export default ExpenseItem;
