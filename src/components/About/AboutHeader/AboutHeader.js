import React, {useEffect} from "react";
import styles from "./AboutHeader.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import Underline from "../../../images/underline.svg"
import Product from "../../../images/product.svg"
import Github from "../../../images/github.png"

function AboutHeader(props) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className={styles.main}>
      <Container>
        {" "}
        <Row>
          <Col className={styles.textContainer} lg={6}>
            <h2 className={styles.header1}>Taking a Look at ...</h2>
            <h2 className={styles.header2}>Behind the Algorithm.</h2>
            <img className={styles.underline} src={Underline} alt="BigCo Inc. logo"/>
            <br></br>
            <p className={styles.subheader}>We don't hide our work or shy away from the public eye</p>
            <Button  variant="light" className={styles.repoButton} href="https://github.com/AskSid/pick-six-ai" target="_blank">
                <img className={styles.github} src={Github} alt="BigCo Inc. logo"/>
                Github Repo 
            </Button>
          </Col>
          <Col lg={6}>
            <img className={styles.database} src={Product} alt="BigCo Inc. logo"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutHeader;
