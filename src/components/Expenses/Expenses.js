import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpensesFilter from "./ExpenseFilter/ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [year, setYear] = useState(2021);

  const filterChangeHandler = (year) => {
    setYear(year);
  };

  const expenseFiltered = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });



  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter 
          selected={year} 
          onChangeFilter={filterChangeHandler} 
        />
        <ExpensesChart expenses={expenseFiltered}/>
        <ExpensesList items={expenseFiltered} />
      </Card>
    </div>
  );
}

export default Expenses;
