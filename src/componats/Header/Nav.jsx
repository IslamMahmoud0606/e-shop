import React from "react";
import "../Header/Nav.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../imges/logo.png";
import shoppingBag from "../imges/shopping-bag.png";

export default function NavBar() {
  return (
    <div>
      <Navbar bg="white" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              alt="logo"
              width="120"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center">
              <Nav.Link href="#home" className="fs-5 ms-3">
                Home
              </Nav.Link>
              <Nav.Link href="#link" className="fs-5 ms-3">
                Shop
              </Nav.Link>
              <Nav.Link href="#link" className="fs-5 ms-3">
                Blog
              </Nav.Link>
              <Nav.Link href="#link" className="fs-5 ms-3">
                About
              </Nav.Link>
              <Nav.Link href="#link" className="fs-5 ms-3">
                Contact
              </Nav.Link>
              <Nav.Link
                href="#link"
                className="fs-4 ms-3 d-flex align-items-center"
              >
                <img
                  src={shoppingBag}
                  alt="Link"
                  width="20"
                  className="me-2"
                  style={{ verticalAlign: "middle" }}
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
