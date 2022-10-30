import { FC, useState } from "react";
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
}): JSX.Element => {
    const [titleState, setTitle] = useState<string | null>(title);

    return (
        <Card className={style.ExpenseItem}>
            <div className={style.ExpenseItem__description}>
                <ExpenseDate date={date} />
                <h2>{titleState}</h2>
                <div className={style.ExpenseItem__price}>${amount}</div>
            </div>
            <button onClick={() => setTitle("New Title")}>Change Title</button>
        </Card>
    );
};

export default ExpenseItem;
