import React from "react";
import styles from "./Header.module.css";
import { Container, Row, Col } from "react-bootstrap";
import MainImage from "../../../images/MainImage.png"
import Main from "../../../images/Rocket.svg"
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className={styles.header}>
        <Container>
          <Row>
            <Col lg={8} className={styles.titleContainer}>
              <h1 className={styles.title}>Fantasy Football Driven by Data.</h1>
              <p className={styles.subTitle}>Fantasy Football backed by numbers and thousands of data points</p>
            </Col>
            <Col lg={4} className={styles.imageContainer}> 
                <img className={styles.mainImage} src={MainImage} alt="BigCo Inc. logo"/>
            </Col>
          </Row>
        </Container>
        <Container>
        <div className={styles.callToAction}>
            <p className={styles.callToActionText}>Start Assembling Your Dream Team Today 
                <Link className={styles.callToActionButton} to="/mock-draft">Get Started</Link>
            </p>
        </div>
        </Container>
      </div>
    </>
  );
}

export default Header;
