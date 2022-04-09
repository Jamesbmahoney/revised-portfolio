import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";

function Navigation() {
  return(    
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">James Mahoney</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#aboutme">About Me</Nav.Link>
      <Nav.Link href="#projects">Projects</Nav.Link>
      <Nav.Link href="#contactinfo">Contact</Nav.Link>
      <Nav.Link href="#resume">Resume</Nav.Link>
    </Nav>
    </Container>
  </Navbar>  

  );
};

export default Navigation;