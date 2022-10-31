import "./App.css";
import NavBar from "./components/navbar/navbar";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
import { ExpenseCreated } from "./ExpenseCreated";

function App() {
    const expenses: ExpenseCreated[] = [
        {
            id: "e1",
            title: "Toilet Paper",
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        {
            id: "e2",
            title: "New TV",
            amount: 799.49,
            date: new Date(2021, 2, 12),
        },
        {
            id: "e3",
            title: "Car Insurance",
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: "e4",
            title: "New Desk (Wooden)",
            amount: 450,
            date: new Date(2021, 5, 12),
        },
    ];

    const [expensesUpToDate, setExpenses] =
        useState<ExpenseCreated[]>(expenses);

    const onAddExpense = (expenseCreated: ExpenseCreated) => {
        expenses.push({
            ...expenseCreated,
            id: String(`e${expenses.length + 1}`),
        });
        setExpenses(expenses);
        console.log(expensesUpToDate);
    };

    return (
        <>
            <NavBar />
            <NewExpense getExpense={onAddExpense} />
            <Expenses expenses={expensesUpToDate} />
        </>
    );
}

export default App;
