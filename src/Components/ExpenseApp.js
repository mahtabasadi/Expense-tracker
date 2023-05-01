import { useEffect, useState } from "react";
import TranseActionComponent from "./TranseActionComponent";
import OverViewComponent from "./OverViewComponent";
const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const addTransaction = (formValue) => {
    console.log(formValue);
    const data = {...formValue, id: Date.now}
    setTransactions([...transactions , data])
  };

  useEffect(()=>{
    let exp = 0;
    let inc = 0;
    transactions.forEach((t)=> {
      t.type === 'expense' ? (exp = exp + parseFloat(t.amount)) : (inc = inc + parseFloat(t.amount))
    })
    setExpense(exp)
    setIncome(inc)
  },[transactions])

  return (
    <section className="container">
      <OverViewComponent
        income={income}
        expense={expense}
        addTransaction={addTransaction}
      />
      <TranseActionComponent transactions={transactions} />
    </section>
  );
};

export default ExpenseApp;
