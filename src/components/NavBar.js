import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Link className={styles.link} to="/">
              Home
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="">
                {" "}
                <Link className={styles.link} to="/mock-draft">
                  Mock Draft
                </Link>
              </Nav.Link>
              <Nav.Link className={styles.lol} href="#link">
                {" "}
                <Link className={styles.link} to="/player-rankings">
                  Player Rankings
                </Link>
              </Nav.Link>
              <Nav.Link href="#link">
                {" "}
                <Link className={styles.link} to="/about">
                  Behind the Algorithm
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Link className={styles.link} to="/">
        Home
      </Link>

      <Link className={styles.link} to="/mock-draft">
        Mock Draft
      </Link>

      <Link className={styles.link} to="/player-rankings">
        Player Rankings
      </Link>

      <Link className={styles.link} to="/about">
        About
      </Link>
    </div>
  );
};

export default NavBar;
