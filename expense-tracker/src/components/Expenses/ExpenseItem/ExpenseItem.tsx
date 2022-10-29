import { FC } from "react";
import Card from "../../UI/Card";
import ExpenseDate from "./ExpenseDate";
import style from "./ExpenseItem.module.css";

interface IExpenseProps {
    date: Date;
    title: string;
    amount: string;
}

const ExpenseItem: FC<IExpenseProps> = ({
    date,
    title,
    amount,
}): JSX.Element => (
    <Card className={style.ExpenseItem}>
        <div className={style.ExpenseItem__description}>
            <ExpenseDate date={date} />
            <h2>{title}</h2>
            <div className={style.ExpenseItem__price}>${amount}</div>
        </div>
    </Card>
);

export default ExpenseItem;
