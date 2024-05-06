import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login'
import Navbar from './components/Navbar/Navbar'
import Deposit from './components/Deposit/Deposit'
import Sidebar from'./components/Sidebar/Sidebar'
import Signup from './components/Signup/Signup';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Withdraw from './components/Withdraw/Withdraw.';
import Users from './components/Users/Users';


function App() {
  return (
  <div>
    <nav>
      <Navbar />
    </nav>
    <section>
    <BrowserRouter>
          <Routes>
              <Route path ='/' element={<Login />}></Route>
              <Route path ='/signup' element={<Signup />}></Route>
          </Routes>
    </BrowserRouter>
    </section>
    <main>
    {/* <Sidebar /> */}
    {/* <Deposit /> */}
    {/* <Withdraw /> */}
    {/* <Users /> */}
    </main>
  </div>

  );
}

export default App;
