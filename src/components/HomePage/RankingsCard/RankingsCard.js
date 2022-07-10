import React from "react";
import styles from "./RankingCard.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import RankingsCardImage from "../../../images/RankingsCardImage.jpg";
import RankingsCardImageMain from "../../../images/RankingsCardImageMain.png";

function RankingsCard(props) {
  return (
    <div className={styles.rankingsCard}>
      <Container>
        <div className={styles.border}>
          <Row>
            <Col lg={7}>
              <div className={styles.rankingsCardImageMainContainer}>
                <img
                  className={styles.rankingsCardImageMain}
                  src={RankingsCardImageMain}
                  alt="BigCo Inc. logo"
                />
              </div>
            </Col>
            <Col lg={5} className={styles.rankingsCardInfo}>
              <img
                className={styles.rankingsCardImage}
                src={RankingsCardImage}
                alt="BigCo Inc. logo"
              />
              <h3 className={styles.rankingsCardHeading}>
                Check out our complete rankings
              </h3>
              <Link className={styles.rankingsCardButton} to="/player-rankings">
                Learn More
              </Link>
              <p className={styles.rankingsCardText}>
                All the players you could want, ranked right for your picking
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default RankingsCard;
