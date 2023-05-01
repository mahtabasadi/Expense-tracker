import { useState } from "react";

const AddTranseAction = ({addTransaction , setIsShow}) => {
  const [formValue, setFormValue] = useState({
    type: "expense",
    amount: 0,
    desc: "",
  });

  const changeHandler = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addTransaction(formValue)
    setIsShow(false)
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="desc"
        onChange={changeHandler}
        value={formValue.desc}
      />
      <input
        type="number"
        name="amount"
        onChange={changeHandler}
        value={formValue.amount}
      />
      <div className="radioBox">
        <input
          type="radio"
          value="expense"
          name="type"
          checked={formValue.type === "expense"}
          onChange={changeHandler}
          id='expense'
        />
        <label htmlFor="expense">Expense</label>
        <input
          type="radio"
          value="income"
          name="type"
          checked={formValue.type === "income"}
          onChange={changeHandler}
          id='income'
        />
        <label htmlFor="income">Income</label>
      </div>
      <button className="btn primary" type="submit">Add transaction</button>
    </form>
  );
};

export default AddTranseAction;
