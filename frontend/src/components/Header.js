import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import btnPrimary from '../btn-primary.png';
import './Header.css';

function Header() {
  return (
    <header>
      <Navbar
        expand="lg"
        collapseOnSelect
        className="navbar-custom navbar-dark"
      >
        <Container>
          <Navbar.Brand href="#">
            <img
              src="/images/logo.svg"
              alt="logo"
              style={{ width: 100, height: 40 }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto parent">
              <Nav.Link href="#">Services</Nav.Link>
              <Nav.Link href="#">Industries</Nav.Link>
              <Nav.Link href="#">Cases</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <button className="p-btn">
                <img src={btnPrimary} alt="button primary" />
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
