import React from 'react';
import {
  Nav,
  Container,
  Navbar,  
} from 'react-bootstrap';

function Navigation(props) {
  return (
    <>
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="home">Home</Nav.Link>
      <Nav.Link href="about">About</Nav.Link>
      <Nav.Link href="portfolio">Portfolio</Nav.Link>
      <Nav.Link href="contact">Contact</Nav.Link>
      <Nav.Link href="footer">Links</Nav.Link>
    </Nav>
    </Container>
    </Navbar>     
    </>
  );
};

export default Navigation;