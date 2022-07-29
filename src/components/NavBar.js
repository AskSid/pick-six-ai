import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <Navbar bg="rgb(17, 17, 17)" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Link className={styles.logo} to="/">
            &#60; pick six ai &#62;
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                {" "}
                <Link className={styles.link} to="/mock-draft">
                  Mock Draft
                </Link>
                {" "}
                <Link className={styles.link} to="/player-rankings">
                  Player Rankings
                </Link>
                {" "}
                <Link className={styles.link} to="/about">
                  Behind the Algorithm
                </Link>
                {" "}
                <Link className={styles.link} to="/blog">
                  Blog
                </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
