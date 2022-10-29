import style from "./ExpenseItem.module.css";

const ExpenseItem = () => (
    <div className={style.ExpenseItem}>
        <div>March 28th 2021</div>
        <div className={style.ExpenseItem__description}>
            <h2>Car Insurance</h2>
            <div className={style.ExpenseItem__price}>$294.67</div>
        </div>
    </div>
);

export default ExpenseItem;
