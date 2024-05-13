import React from 'react'
import "./Withdraw.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react'

function Withdraw() {
  const [balance, setBalance] = useState(1000);

  const handleWithdrawal = (event) => {
    event.preventDefault();
    const amount = parseFloat(event.target.querySelector('input[type="number"]').value);
    if (!isNaN(amount)) {
      if (amount <= balance) {
        const newBalance = balance - amount; // Calculate new balance
      setBalance(newBalance); // Update balance state
        alert(`Withdrawal successful! New balance: ${balance - amount}`);
        event.target.reset();
      } else {
        alert('Insufficient funds!');
      }
    } else {
      alert('Please enter a valid amount!');
    }
  }


  return (
    <div className='form-container-left'>
    <div className='form-container p-3 rounded bg-white'>
      <form onSubmit={handleWithdrawal}>
        <h4 className='text-center mb-3'>Withdraw</h4>
        <div className='mb-1'>
          <p className='mb-1'>Account Name: Johnneil Mendoza</p>
          <p className='mb-1'>Account Balance: ${balance}</p>
        </div>
        <div className='mb-2'>
          <label htmlFor='amount' className='form-label' >Amount:</label>
          <input type='number' placeholder='Enter Amount to Withdraw' className='form-control' style={{ width: '70%' }}/>
        </div>
        <div className='d-grid'>
          <button className='btn btn-primary' style={{ width: '70%' }}>Withdraw</button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Withdraw;