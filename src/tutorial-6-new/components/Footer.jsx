import React from "react";
import { Navbar, Container } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">Бложик 2020</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href="#login">bo-ronin</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </footer>
  );
}

export default Footer;
