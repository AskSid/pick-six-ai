import React, {useEffect} from "react";
import styles from "./Header.module.css";
import { Container, Row, Col } from "react-bootstrap";
import MainImage from "../../../images/MainImage.png";
import Main from "../../../images/blobanimation.svg";
import Underline from "../../../images/underline.svg";
import { Link } from "react-router-dom";

function Header() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
      <div className={styles.header}>
        <Container fluid>
          <Row className={styles.titleContainer}>
            <Col lg={9}>
              <h1 className={styles.title}>Fantasy Football Driven by Data.</h1>
              <p className={styles.subTitle}>
                Fantasy Football backed by numbers and thousands of data points
              </p>
              <div className={styles.callToAction}>
                <p className={styles.callToActionText}>
                  Start Assembling Your Dream Team Today
                  <Link className={styles.callToActionButton} to="/mock-draft">
                    Get Started
                  </Link>
                </p>
              </div>
              <h2 className={styles.informationTitle}>What we're About</h2>
              <h2 className={styles.informationHeader}>
                Pick Six AI Core Values
              </h2>
              <img className={styles.underline} src={Underline} alt="BigCo Inc. logo"/>
              <p className={styles.informationSubheading}>
                At our core values, we're a bunch of football-loving data nerds
                who want you to win your fantasy football league
              </p>
            </Col>
            <Col lg={3} className={styles.imageContainer}>
            </Col>
          </Row>
        </Container>
        <Container></Container>
      </div>
    </>
  );
}

export default Header;
