import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <Navbar bg="black" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand  className={styles.link}href="#home">
            <Link  className={styles.link} to="/">
              Home
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className={styles.link} href="">
                {" "}
                <Link className={styles.link} to="/mock-draft">
                  Mock Draft
                </Link>
              </Nav.Link>
              <Nav.Link className={styles.link} href="#link">
                {" "}
                <Link className={styles.link} to="/player-rankings">
                  Player Rankings
                </Link>
              </Nav.Link>
              <Nav.Link className={styles.link} href="#link">
                {" "}
                <Link className={styles.link} to="/about">
                  Behind the Algorithm
                </Link>
              </Nav.Link>
              <Nav.Link className={styles.link} href="#link">
                {" "}
                <Link className={styles.link} to="/about">
                  Blog
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
