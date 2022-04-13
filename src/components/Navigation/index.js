import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import selfImage from "../../assets/images/james2.jpg"

function Navigation(props) {
  const {
    // categories = [],
    // setCurrentCategory,
    // contactSelected,
    // currentCategory,
    setContactSelected,
  } = props;

  return(    
  <Navbar bg="dark" variant="" className="fixed-top position-sticky">
    <img src={selfImage} style={{ width: "4%" }} alt="goofy smile" className="me-3 d-flex justify-content-start"></img>            
    <Navbar.Brand className="d-flex justify-content-start"  href="#home">James Mahoney</Navbar.Brand>
    <Container></Container>
    <Nav className="d-flex justify-content-end">
      <Nav.Link  data-testid="aboutme" href="#aboutme" onClick={() => setContactSelected(false)}>About Me</Nav.Link>
      <Nav.Link href="#projects">Projects</Nav.Link>
      <Nav.Link href="#contactinfo">Contact</Nav.Link>
      <Nav.Link href="#resume">Resume</Nav.Link>      
    </Nav>        
  </Navbar>  

  );
};

export default Navigation;