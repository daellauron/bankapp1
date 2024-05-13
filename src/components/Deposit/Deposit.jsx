import React, { useState, useEffect } from 'react';
import "./Deposit.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import data from '../data/bankUsers.json';

function Deposit() {
  const [balance, setBalance] = useState([]);
  const [users, setUsers] = useState([]);
  const [id, setId] = useState ([]) ; 

  useEffect(() => {
    // Set the users state with the imported data
    setUsers(data);
  }, []);

  const updateUserBalance = (updatedUsers) => {
    setUsers(updatedUsers);
  };

  const handleDeposit = (event) => {
    event.preventDefault();
    const amount = parseFloat(event.target.querySelector('input[type="number"]').value);
    if (!isNaN(amount) && amount > 0) { // Check if the amount is a valid positive number
      const newBalance = balance + amount; // Calculate new balance
      setBalance(newBalance); // Update balance state
      updateUserBalance(users.map(user => ({ ...user, balance: user.balance + amount }))); // Update each user's balance
      alert(`Deposit successful! New balance: ${newBalance}`);
      event.target.reset();
    } else {
      alert('Please enter a valid positive amount!');
    }
  };

  return (
    <div className='form-container-left'>
      <div className='form-container p-4 rounded bg-white '>
        <form onSubmit={handleDeposit}>
          <h3 className='text-center'>Deposit</h3>
          <div className='mb-2 '>
            <p style={{ marginLeft: '5px' }}>Account Balance: ${balance}</p>
          </div>
          <div className='mb-2'>
            <label htmlFor='amount'>Amount</label>
            <input type='number' placeholder='Enter Amount to Deposit' className=' form-control form-control-sm' style={{ width: '70%' }} />
          </div>
          <div className='d-grid' style={{ width: '70%' }}>
            <button className='btn btn-primary'>Deposit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Deposit;