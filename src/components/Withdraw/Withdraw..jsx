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
    <div className='login template d-flex align-items-center vh-100 bg-primary'>
        <div className='d-flex justify-content-center align-items-center w-100'>
          <div className='form-container-left'>
            <div className='form-container p-5 rounded bg-white'>
              <form onSubmit={handleWithdrawal}>
                <h3 className='text-center'>Withdraw</h3>
                <div className='mb-2'>
                  <p>Account Name: Johnneil Mendoza</p>
                </div>
                <div className='mb-2'>
                  <p>Account Balance: ${balance}</p>
                </div>
                <div className='mb-2'>
                  <label htmlFor='amount'>Amount:</label>
                  <input type='number' placeholder='Enter Amount to Withdraw' className='form-control' />
                </div>
                <div className='d-grid'>
                  <button className='btn btn-primary'>Withdraw</button>
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

export default Withdraw;