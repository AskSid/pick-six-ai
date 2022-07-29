import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";

function NavBar({isHome}) {
  const [show, setShow] = useState(true);
  const [isScrollUp, setIsScrollUp] = useState(false);
  const [y, setY] = useState(window.scrollY);

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setIsScrollUp(true)
      } else if (y < window.scrollY) {
        setIsScrollUp(false)
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);


  const controlNavbar = () => {
    if (y < 35 && isScrollUp == true) {
      setShow(true);
    }
    else if (isScrollUp == false && y > 20) {
      setShow(false);
    } 
  };
  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [y]);

  var dropHeader= styles.nav3
  if (isHome === true){
    dropHeader = styles.nav2
  } 

  const navStyle = show ? styles.nav : dropHeader;

  return (
    <div className={navStyle}>
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
              </Link>{" "}
              <Link className={styles.link} to="/player-rankings">
                Player Rankings
              </Link>{" "}
              <Link className={styles.link} to="/about">
                Behind the Algorithm
              </Link>{" "}
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
