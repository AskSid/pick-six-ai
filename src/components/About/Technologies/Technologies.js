import React from "react";
import styles from "./Technologies.module.css";
import { Container, Row, Col } from "react-bootstrap";
import TensorFlow from "../../../images/tensorflow.png";
import Twitter from "../../../images/twitter.webp";
import ReactImage from "../../../images/react.png";
import Bootstrap from "../../../images/bootstrap.png";
import Figma from "../../../images/figma.svg";
import Python from "../../../images/python.png";
import Firebase from "../../../images/firebase.png";
import Git from "../../../images/git.png";

function Technologies(props) {
  return (
    <div className={styles.main}>
      <Container>
        <h2 className={styles.heading}>Notable Technologies</h2>
        <Row className={styles.row}>
          <Col md={6}>
            <div className={styles.tensorflowContainer}>
              <img
                className={styles.tensorflow}
                src={TensorFlow}
                alt="BigCo Inc. logo"
              />
            </div>
          </Col>
          <Col md={6}>
            <h2 className={styles.tensorflowTitle}>TensorFlow</h2>
            <p className={styles.tensorflowText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
        </Row>
        <Row className={styles.row}>
          <Col md={6}>
            <h2 className={styles.twitterTitle}>TwitterAPI</h2>
            <p className={styles.twitterText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
          <Col md={6}>
            <div className={styles.twitterContainer}>
              <img
                className={styles.twitter}
                src={Twitter}
                alt="BigCo Inc. logo"
              />
            </div>
          </Col>
        </Row>
        <h2 className={styles.heading}>Suplementary Technologies</h2>
        <Row>
          <div className={styles.circleContainer}>
            <Col md={2}>
              <div className={styles.circle}>
                <img
                  className={styles.react}
                  src={ReactImage}
                  alt="BigCo Inc. logo"
                />
              </div>
            </Col>
            <Col md={2}>
              <div className={styles.circle}>
                <img
                  className={styles.react}
                  src={Bootstrap}
                  alt="BigCo Inc. logo"
                />
              </div>
            </Col>
            <Col md={2}>
              <div className={styles.circle}>
              <img
                  className={styles.react}
                  src={Python}
                  alt="BigCo Inc. logo"
                />
              </div>
            </Col>
            <Col md={2}>
              <div className={styles.circle}>
              <img
                  className={styles.figma}
                  src={Figma}
                  alt="BigCo Inc. logo"
                />
              </div>
            </Col>
            <Col md={2}>
              <div className={styles.circle}>
              <img
                  className={styles.figma}
                  src={Firebase}
                  alt="BigCo Inc. logo"
                />
              </div>
            </Col>
            <Col md={2}>
              <div className={styles.circle}>
              <img
                  className={styles.react}
                  src={Git}
                  alt="BigCo Inc. logo"
                />
              </div>
            </Col>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Technologies;
