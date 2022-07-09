import React from "react";
import styles from "./Header.module.css";
import { Container, Row, Col } from "react-bootstrap";
import MainImage from "../../../images/MainImage.png"


function Header() {
  return (
    <>
      <div className={styles.header}>
        <Container>
          <Row>
            <Col lg={8} className={styles.titleContainer}>
              <h1 className={styles.title}>Fantasy Football Driven by Data</h1>
              <p className={styles.subTitle}> Drien by the fastest algorithm the world has every seen</p>
            </Col>
            <Col lg={4} className={styles.imageContainer}> 
                <img className={styles.mainImage} src={MainImage} alt="BigCo Inc. logo"/>
            </Col>
          </Row>
        </Container>
        <div className={styles.callToAction}>
            <p className={styles.callToActionText}>Start Assembling Your Dream Team Today 
                <a className={styles.callToActionButton} href="/MockDraft">Get Started</a>
            </p>
        </div>
      </div>
    </>
  );
}

export default Header;
