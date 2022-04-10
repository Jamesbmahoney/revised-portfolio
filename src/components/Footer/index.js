import React from "react";
import { Navbar} from "react-bootstrap";
import { NavbarBrand } from "react-bootstrap";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <div className="fixed-bottom">
      <Navbar bg="dark" variant="dark" className="py-0">
        <Container>
          <NavbarBrand>Footer</NavbarBrand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Footer;
