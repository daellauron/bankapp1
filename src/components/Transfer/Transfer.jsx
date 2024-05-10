import { useState } from "react";
import '../../App.css'; // Make sure to import the CSS file for Bootstrap
import data from '../data/bankUsers.json';

function Transfer() {
  const [users, setUsers] = useState(data);
  const [show, setShow] = useState(false); // flag to hide or show the element
  const [sender, setSender] = useState("");
  const [receiver, setReceiver] = useState("");
  const [amount, setAmount] = useState("");

  const userExist = (name) => {
    return users.find((user) => user.name === name);
  };

  const findUser = (name) => {
    let foundUser = users.filter((user) => user.name === name);
    return foundUser[0];
  };

  const transferMoney = (event) => {
    event.preventDefault();
    const newAmount = Number(amount);
    if (userExist(sender) && userExist(receiver) && sender !== receiver && newAmount > 0) {
      const senderInfo = findUser(sender);
      if (senderInfo.balance >= newAmount) {
        const updateUsers = users.map((user) => {
          if (user.name === sender) {
            return { ...user, balance: user.balance - newAmount };
          } else if (user.name === receiver) {
            return { ...user, balance: user.balance + newAmount };
          }
          return user;
        });
        setUsers(updateUsers);
      } else {
        alert("Not enough balance!");
      }
    } else {
      alert("Transaction invalid!");
    }
    setSender("");
    setReceiver("");
    setAmount("");
    setShow(false);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
            <div className="container d-flex flex-column align-items-center">
            <h1 className="mt-5 mb-4">Transfer Money</h1>
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
            <div className="row mt-4 ">
              <div className="col">
                <form onSubmit={transferMoney}>
                  <div className="mb-3">
                    <label htmlFor="sender" className="form-label">Sender:</label>
                    <input type="text" className="form-control" id="sender" value={sender} onChange={(event) => setSender(event.target.value)} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="receiver" className="form-label">Receiver:</label>
                    <input type="text" className="form-control" id="receiver" value={receiver} onChange={(event) => setReceiver(event.target.value)} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="amount" className="form-label">Amount:</label>
                    <input type="number" className="form-control" id="amount" value={amount} onChange={(event) => setAmount(event.target.value)} required />
                  </div>
                  <button type="submit" className="btn btn-success">Confirm Transfer</button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Transfer;
