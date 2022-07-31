import React from "react";
import styles from "./MockDraftCard.module.css";
import { Container, Row, Col } from "react-bootstrap";
import InformationImage3 from "../../../images/learn.svg";
import { Link } from "react-router-dom";

function MockDraftCard(props) {
  return (
    <div className={styles.mockDraftCardBack}>
      <div className={styles.mockDraftCard}>
        <Row>
          <Col lg={5}>
            <p className={styles.mockDraftCardTitle}>
              Try our simulated Mock Draft
            </p>
          </Col>
          <Col lg={3} className={styles.mockDraftCardButtonContainer}>
            <Link className={styles.mockDraftCardButton} to="/mock-draft">
              Play Now
            </Link>
          </Col>
          <Col lg={4}>
          <img
              className={styles.mockDraftCardImage}
              src={InformationImage3}
              alt="Information Image 3"
            />
          </Col>
        </Row>
        <p className={styles.mockDraftCardText}>
          Get an edge in front of your opponents, climb the ranks, and be
          prepared for any in-draft scenario! An unlimited amount of mock drafts
          right at your disposal.
        </p>
      </div>
    </div>
  );
}

export default MockDraftCard;
