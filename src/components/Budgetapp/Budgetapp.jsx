import React, { useState } from 'react';
import './Budgetapp.css';
import data from '../data/bankUsers.json';

function Budgetapp() {
  const [users, setUsers] = useState(data);
  const [show, setShow] = useState(false);
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState("");
  const [todos, setTodos] = useState([]);

  const userExist = (name) => {
    return users.find((user) => user.name === name);
  };

  const findUser = (name) => {
    return users.find((user) => user.name === name);
  };

  const addExpense = (event) => {
    event.preventDefault();
    const newAmount = Number(amount);
    const expenseReceiver = findUser(expense);

    if (userExist(expense) && newAmount > 0) {
      if (expenseReceiver.balance >= newAmount) {
        const updatedExpenseReceiverBalance = expenseReceiver.balance - newAmount;

        const updatedUsers = users.map((user) => {
          if (user.name === expense) {
            return { ...user, balance: updatedExpenseReceiverBalance };
          }
          return user;
        });

        setUsers(updatedUsers);
        setTodos([...todos, { expense, amount: newAmount }]);
        alert("Expense Added");
      } else {
        alert("Not enough balance!");
      }

      setExpense("");
      setAmount("");
      setShow(false);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="container d-flex flex-column align-items-center">
            <h1 className="mt-5 mb-4">Budget App</h1>
            <div className="row">
              <div className="col">
                <div>
                  {users.map((user) => (
                    <div key={user.id}>
                      {user.name} - ${user.balance}
                    </div>
                  ))}
                  <button className="btn btn-primary mt-3" onClick={() => setShow(!show)}>
                    {show ? "Hide Transfer Money" : "Show Transfer Money"}
                  </button>
                </div>
              </div>
            </div>
          </div>
          {show && (
            <div className="row mt-4">
              <div className="col">
                <form onSubmit={addExpense} className="mt-3 position-absolute">
                  <div className="mb-3">
                    <label htmlFor="sender" className="form-label">Expense:</label>
                    <input type="text" className="form-control" id="expense" value={expense} onChange={(event) => setExpense(event.target.value)} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="amount" className="form-label">Amount:</label>
                    <input type="number" className="form-control" id="amount" value={amount} onChange={(event) => setAmount(event.target.value)} required />
                  </div>
                  <button type="submit" className="btn btn-success">Confirm Expense</button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-lg-6">
          <ul className="list-group">
            {todos.map((todo, index) => (
              <li key={index} className="list-group-item">{todo.expense} - ${todo.amount}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Budgetapp;