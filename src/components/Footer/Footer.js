import React from "react";
import styles from "./Footer.module.css";
import { Container, Row, Col } from "react-bootstrap";
import InformationImage3 from "../../images/shape.png";
import { Link } from "react-router-dom";
import { AiFillMail } from "react-icons/ai";

function Footer(props) {
  return (
    <div className={styles.footer}>
      <div className={styles.line}></div>
      <img
        className={styles.footerImage}
        src={InformationImage3}
        alt="Information Image 3"
      />
      <Row className={styles.footerInfo}>
        <Col className={styles.footerSection} sm={6}>
          <h3 className={styles.footerHeader}>Navigation</h3>
          <Link className={styles.footerNavigation} to="/">
            Home
          </Link>
          <p></p>
          <Link className={styles.footerNavigation} to="/mock-draft">
            Mock Draft
          </Link>
          <p></p>
          <Link className={styles.footerNavigation} to="/player-rankings">
            Player Rankings
          </Link>
          <p></p>
          <Link className={styles.footerNavigation} to="/about">
            Behind the Algorithm
          </Link>
        </Col>
        <Col sm={6} className={styles.footerSection}>
          <h3 className={styles.footerHeader}>Contact Us</h3>
            <a  href="mailto:abchoi11@icloud.com"><AiFillMail className={styles.contact}/></a>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
