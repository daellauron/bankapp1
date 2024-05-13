import React from 'react'
// import "./Login.css"
import "./Navbar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function navbar() {
  return (
<Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">RufusBank</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#allusers">Hello,Johhneil!</Nav.Link>
            <Nav.Link href="#allusers">Log out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default navbar