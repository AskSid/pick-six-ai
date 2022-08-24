import React from "react";
import styles from "./Contributors.module.css";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import Alex from "../../../images/alex.png";
import Sid from "../../../images/sid.jpeg"

function Contributors(props) {
  return (
    <div className={styles.main}>
      <Container className={styles.main}>
        <h2 className={styles.title}>Contributors</h2>
        <Row>
          <Col sm={6} className={styles.col}>
            <div className={styles.personContainer}>
              <img className={styles.person} src={Alex} alt="BigCo Inc. logo" />
            </div>
            <p className={styles.bio}>
              A life long Philadelphia Eagles fan, Alex Choi is a sophmore
              majoring in both Computer Science and English at Brown University.
              While his main focus has been in front-end development and UI/UX,
              he also has a newfound passion for data science and machine
              learning, which he will be specializing in at his time in
              Providence
            </p>
          </Col>
          <Col sm={6} className={styles.col}>
            <div className={styles.personContainer}>
              <img className={styles.person} src={Sid} alt="BigCo Inc. logo" />
            </div>
            <p className={styles.bio}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contributors;
