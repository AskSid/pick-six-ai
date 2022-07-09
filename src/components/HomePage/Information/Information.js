import React from "react";
import styles from "./Information.module.css";
import { Container, Row, Col } from "react-bootstrap";
import InformationImage1 from "../../../images/InformationImage1.png";
import InformationImage2 from "../../../images/InformationImage2.png";
import InformationImage3 from "../../../images/InformationImage3.jpg";

function Information(props) {
  return (
    <div className={styles.information}>
      <Container>
        <h2 className={styles.informationTitle}>What we're About</h2>
        <h2></h2>
        <Row>
          <Col md={4}>
            <img
              className={styles.informationImage}
              src={InformationImage1}
              alt="Information Image 1"
            />
            <p className={styles.informationText}>
              Use data-informaed rankings to take the higher advanage
            </p>
          </Col>
          <Col md={4}>
            <img
              className={styles.informationImage}
              src={InformationImage2}
              alt="Information Image 2"
            />
            <p className={styles.informationText}>
              Combine big data analytics with the eye test
            </p>
          </Col>
          <Col md={4}>
            <img
              className={styles.informationImage}
              src={InformationImage3}
              alt="Information Image 3"
            />
            <p className={styles.informationText}>
              Watch as your team dominates the compoetition
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Information;
