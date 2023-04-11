import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, isSetIsEditing] = useState(false);

  const saveExpenseDataHanlder = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    isSetIsEditing(false);
  };

  const startEditingHandler = () => {
    isSetIsEditing(true);
  };

  const stopEditingHandnler = () => {
    isSetIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add new Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHanlder}
          onCancel={stopEditingHandnler}
        />
      )}
    </div>
  );
};

export default NewExpense;
