import { useState } from "react";
import '../../App.css'; // Make sure to import the CSS file for Bootstrap
import bankUsersData from '../data/bankUsers.json';

function Transfer() {
  const [users, setUsers] = useState(bankUsersData);
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
    const senderInfo = findUser(sender);
    const receiverInfo = findUser(receiver);
    
    if (userExist(sender) && userExist(receiver) && sender !== receiver && newAmount > 0) {
      if (senderInfo.balance >= newAmount) {
        const updatedSenderBalance = senderInfo.balance - newAmount;
        const updatedReceiverBalance = receiverInfo.balance + newAmount;
  
        const updatedUsers = users.map((user) => {
          if (user.name === sender) {
            return { ...user, balance: updatedSenderBalance };
          } else if (user.name === receiver) {
            return { ...user, balance: updatedReceiverBalance };
          }
          return user;
        });
  
        setUsers(updatedUsers);
        alert("Transfer successful!");
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
          <h3 className="mt-3 mb-2">Transfer Money</h3>
          {users.map((user) => (
            <div key={user.id}>
              {user.name} - ${user.balance}
            </div>
          ))}
          <button className="btn btn-primary mt-3" onClick={() => setShow(!show)}>
            {show ? "Hide Transfer Money" : "Show Transfer Money"}
          </button>
          {show && (
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
          )}
        </div>
      </div>
    </div>
  );
}

export default Transfer;