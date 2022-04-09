import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import selfImage from "../../assets/images/james2.jpg"

function Navigation() {
  return(    
  <Navbar bg="dark" variant="dark" className="py-0">
    <img src={selfImage} style={{ width: "3%" }} alt="goofy smile" className="me-3"></img>            
    <Navbar.Brand href="#home">James Mahoney</Navbar.Brand>
    <Container></Container>
    <Nav className="me-auto">
      <Nav.Link href="#aboutme">About Me</Nav.Link>
      <Nav.Link href="#projects">Projects</Nav.Link>
      <Nav.Link href="#contactinfo">Contact</Nav.Link>
      <Nav.Link href="#resume">Resume</Nav.Link>      
    </Nav>        
  </Navbar>  

  );
};

export default Navigation;