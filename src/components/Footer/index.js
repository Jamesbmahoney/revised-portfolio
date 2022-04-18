import React from "react";
import { Navbar, 
         NavbarBrand, 
         Container} from "react-bootstrap";
import { FaFacebook, 
         FaInstagram,
         FaLinkedin, 
         FaTwitch, 
         FaGithub } from "react-icons/fa";


function Footer() {
  return (
    <div>
      <Navbar bg="secondary" variant="dark">
        <Container className="d-flex justify-content-center">
          <NavbarBrand>
            <a href="https://www.facebook.com/james.b.mahoney/" class="highlight" target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href="https://www.instagram.com/jamesbmahoney/" class="highlight" target="_blank" rel="noreferrer"><FaInstagram /></a> 
            <a href="https://www.linkedin.com/in/jamesbarrymahoney" class="highlight" target="_blank" rel="noreferrer"><FaLinkedin  /></a>
            <a href="https://www.twitch.tv/nomorerandombattles" class="highlight" target="_blank" rel="noreferrer"><FaTwitch /></a>
            <a href="https://github.com/Jamesbmahoney" class="highlight" target="_blank" rel="noreferrer"><FaGithub /></a>
            </NavbarBrand>          
        </Container>
      </Navbar>
    </div>
  );
}

export default Footer;
