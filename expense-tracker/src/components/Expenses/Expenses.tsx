import React, { FC, useState } from "react";
import { ExpenseCreated } from "../../ExpenseCreated";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import styles from "./Expenses.module.css";

interface ExpensesProps {
    expenses: ExpenseCreated[];
}

const Expenses: FC<ExpensesProps> = ({ expenses }): JSX.Element => {
    const [selectedYear, setPickYear] = useState<string>("2021");

    const onChangeYear = (year: string) => {
        setPickYear(year);
    };

    const filteredExpenses = expenses.filter(
        (expenseFiltered: ExpenseCreated) =>
            expenseFiltered.date.getFullYear() === Number(selectedYear)
    );

    const noFilteredItem = (
        <h3 className={styles.Expenses}>
            There's no data to be displayed on the screen
        </h3>
    );

    const filterListHandler = (filteredExpenses: ExpenseCreated[]) => {
        return filteredExpenses.length > 0
            ? filteredExpenses.map((expense: ExpenseCreated) => {
                  return (
                      <ExpenseItem
                          //set unique id per list item to help React identify the individual item
                          key={expense.id}
                          date={expense.date}
                          title={expense.title}
                          amount={String(expense.amount)}
                      />
                  );
              })
            : noFilteredItem;
    };

    return (
        <>
            <Card className={styles.Expenses}>
                <ExpenseFilter
                    selectedYear={selectedYear}
                    getYearPicklist={onChangeYear}
                />
                {filterListHandler(filteredExpenses)}
            </Card>
        </>
    );
};

export default Expenses;
