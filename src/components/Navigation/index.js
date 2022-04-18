import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import selfImage from "../../assets/images/james2.jpg";

function Navigation() {
  return (
    <>
      <Navbar sticky="top" bg="dark" variant="dark">
        <Container className="mb-4" >          
          <Navbar.Brand href="#home"><img className="img-responsive navbar navbar-expand-lg navbar-light fixed-top bg-light py-lg-0" src={selfImage} alt="James goofy face" style={{width:51, marginTop: -3, marginLeft: 10}} />James Mahoney Portfolio</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#footer">Links</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
