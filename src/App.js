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
import Users from './components/Users/Users';


function App() {
  return (
  <div>
    <nav>
      <Navbar />
    </nav>
    <section>
    <Router>
          <Routes>
              <Route path ='/' element={<Login />}></Route>
              <Route path ='/signup' element={<Signup />}></Route>
              // <Route path ='/deposit' element={<Deposit />}></Route>
          </Routes>
    </Router>
    </section>
    <main>
    {/* <Sidebar /> */}
    {/* <Deposit /> */}
    {/* <Withdraw /> */}
    {/* <Transfer /> */}
    {/* <Users /> */}
    </main>
  </div>

  );
}

export default App;
