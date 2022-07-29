import React from "react";
import styles from "./Information.module.css";
import { Container, Row, Col } from "react-bootstrap";
import InformationImage1 from "../../../images/interface.svg";
import InformationImage2 from "../../../images/data.svg";
import InformationImage3 from "../../../images/success.svg";
import Underline from "../../../images/underline.svg"

function Information(props) {
  return (
    <div className={styles.information}>
      <Container>

        <Row>
          <Col md={4}>
            <img
              className={styles.informationImage}
              src={InformationImage1}
              alt="Information Image 1"
            />
            <p className={styles.informationText}>
              Use data-informed rankings to take the higher advanage
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
