import React from "react";
import styles from "./Method.module.css";
import { Container, Row, Col } from "react-bootstrap";

function Method(props) {
  return (
    <div className={styles.main}>
      <Container>
        <h2 className={styles.methodology}>Methodology</h2>
        <h3 className={styles.subHeading}>
          A  New Analytical Framework for Researching Fantasy Football
        </h3>
        <Row className={styles.row}>
          <Col className={styles.cardContainer} lg={4}>
            <div className={styles.card}>
              <h2>Big Data</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </Col>
          <Col className={styles.cardContainer} lg={4}>
            <div className={styles.card}>
              <h2>Precedent</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </Col>
          <Col className={styles.cardContainer} lg={4}>
            <div className={styles.card}>
              <h2>Recency</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </Col>
        </Row>
        <Row className={styles.row}>
          <Col className={styles.cardContainer} lg={4}>
            <div className={styles.card}>
              <h2>Subjectivity</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </Col>
          <Col className={styles.cardContainer} lg={4}>
            <div className={styles.card}>
              <h2>Environment</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </Col>
          <Col className={styles.cardContainer} lg={4}>
            <div className={styles.card}>
              <h2>Value</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Method;
