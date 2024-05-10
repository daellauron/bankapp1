import React from 'react'
import { useState } from 'react';
import "./Deposit.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Deposit() {
  const [balance, setBalance] = useState(1000);

  const handleDeposit = (event) => {
    event.preventDefault();
    const amount = parseFloat(event.target.querySelector('input[type="number"]').value);
    if (!isNaN(amount) && amount > 0) { // Check if the amount is a valid positive number
      const newBalance = balance + amount; // Calculate new balance
      setBalance(newBalance); // Update balance state
      alert(`Deposit successful! New balance: ${newBalance}`);
      event.target.reset();
    } else {
      alert('Please enter a valid positive amount!');
    }
  };

  return (
    <div className='login template d-flex align-items-center vh-100 bg-primary'>
        <div className='d-flex justify-content-center align-items-center w-100'>
          <div className='form-container-left'>
            <div className='form-container p-5 rounded bg-white'>
              <form onSubmit={handleDeposit}>
                <h3 className='text-center'>Deposit</h3>
                <div className='mb-2'>
                    <p>Account Balance: ${balance}</p>
                </div>
                <div className='mb-2'>
                  <label htmlFor='amount'>Amount</label>
                  <input type='number' placeholder='Enter Amount to Deposit' className='form-control' />
                </div>
                <div className='d-grid'>
                  <button className='btn btn-primary'>Deposit</button>
                </div>
              </form>
            </div>
          </div>
          <div className='form-container-right'>
            <div className='form-container p-5 rounded bg-white'>
              <form>
                <h3 className='text-center'>Welcome to Rufus Bank!</h3>
                <h3 className='text-center'>A partner for life!</h3>
                {/* Add content for the second form here */}
              </form>
            </div>
          </div>
        </div>
      </div>
  )
}



export default Deposit;
