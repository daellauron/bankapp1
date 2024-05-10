import React from 'react'
// import "./Login.css"
import "./Navbar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function navbar() {
  return (
    <Navbar bg="light" data-bs-theme="light">
        <Container>
            <Navbar.Brand href="#home">RufusBank</Navbar.Brand>
            <Nav className="me-auto" >
                <Nav.Link href="#login">Login</Nav.Link>
                <Nav.Link href="#bankapp">Bank App</Nav.Link>
                <Nav.Link href="#deposit">Deposit</Nav.Link>
                <Nav.Link href="#withdraw">Withdraw</Nav.Link>
                <Nav.Link href="#moneytransfer">Transfer</Nav.Link>
                <Nav.Link href="#expenses">Expenses</Nav.Link>
                <Nav.Link href="#allusers">All Users</Nav.Link>
            </Nav>
        </Container>
     </Navbar>
  )
}

export default navbar