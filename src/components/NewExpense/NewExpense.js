import React from "react";
import '../NewExpense/NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
    return (
        <div className="new-expense">
            <ExpenseForm></ExpenseForm>
        </div>
    )
}


export default NewExpense;