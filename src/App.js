import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login'
import Navbar from './components/Navbar/Navbar'
import Deposit from './components/Deposit/Deposit'
import Sidebar from'./components/Sidebar/Sidebar'
import Signup from './components/Signup/Signup';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Withdraw from './components/Withdraw/Withdraw.';
import Transfer from './components/Transfer/Transfer'
import Budgetapp from './components/Budgetapp/Budgetapp';
import Users from './components/Users/Users';
import data from './components/data/bankUsers.json';
import SubmissionTable from './components/SubmissionTable/SubmissionTable';
import BadBank from './components/SubmissionTable/SubmissionTable';


function App() {
  return (
  <div>
    <nav>
      <Navbar />
    </nav>
    <main>
    {/* <Sidebar /> */}
    <Deposit users={data}/>
   <Withdraw users={data} />
    <Transfer users={data} />
    <Budgetapp users={data} />
    </main>
    <section>
    <Users users={data} />
    {/* < SubmissionTable/> */}
    </section>
  </div>

  );
}

export default App;
