import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  
  return (

    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="/">Yumm !</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          
          <NavDropdown title="Menu" id="basic-nav-dropdown">
            <NavDropdown.Item href="/pizza">Pizza</NavDropdown.Item>
            <NavDropdown.Item href="/chinese">
              Chinese
            </NavDropdown.Item>
            <NavDropdown.Item href="punjabi">Punjabi</NavDropdown.Item>
  
            <NavDropdown.Item href="/southIndian">
              South Indian
            </NavDropdown.Item>

            
            <NavDropdown.Item href="/dessert">
              Dessert
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/contactUs">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavBar;