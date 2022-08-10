import React from "react";
import styles from "./Method.module.css";
import { Container, Row, Col } from "react-bootstrap";

function Method(props) {
  return (
    <div className={styles.main}>
      <Container>
        <h2 className={styles.methodology}>Methodology</h2>
        <h3 className={styles.subHeading}>
          A New Analytical Framework for Researching Fantasy Football
        </h3>
        <Row className={styles.row}>
          <Col className={styles.cardContainer} lg={4}>
            <div className={styles.card}>
              <h2>Big Data</h2>
              <p>
                Fantasy football is undoubtedly a game of numbers. What do we do
                with numbers? We analyze them! Luckily, PFF has kepy a long
                standing data base with hundreds of players over the years,
                resulting in thousands of data points to analyze. Using this
                historical model, we can predict how a player will do in an
                upcoming year.
              </p>
            </div>
          </Col>
          <Col className={styles.cardContainer} lg={4}>
            <div className={styles.card}>
              <h2>Scarcity</h2>
              <p>
                Perhaps the largest query in fantasy football is which position
                to take. Do you take position of need or the best player
                available, RB or TE? Luckily, we've developed an algorithm that
                mathematically calculates scarcity into a player's overall
                score. The best combination fo scarcity and value results in the
                best choices.
              </p>
            </div>
          </Col>
          <Col className={styles.cardContainer} lg={4}>
            <div className={styles.card}>
              <h2>Volatility</h2>
              <p>
                Players, just like in real football, are unpredictable.
                Suspensions, roster changes, injuries, and just about anything
                can throw a player off trajectory. We do our best to update
                rankings based on recent news and analytical models that can
                reduce risk retention so you don't get caught off gaurd.
              </p>
            </div>
          </Col>
        </Row>
        <Row className={styles.row}>
          <Col className={styles.cardContainer} lg={4}>
            <div className={styles.card}>
              <h2>Longevity</h2>
              <p>
                Football is a sport that is especially tough on the body. As a
                result, after a certain age players begin to show this wear and
                tear and lost their longevity. Of course, there are exceptions
                like Tom Brady, but as we analyze thousnads of players overtime,
                their age is a major factor in how they will perform this
                upcoming season.
              </p>
            </div>
          </Col>
          <Col className={styles.cardContainer} lg={4}>
            <div className={styles.card}>
              <h2>Environment</h2>
              <p>
                There's something to be said for a player's overall talent level
                in actual football, and yet the correlation with fantasy
                football is iffy at best. A player's supporting cast, offense,
                workload, and schedule are factors that ascend just the mere
                individual player. Fortunately, we keep this in mind and adjust
                player metrics as so.
              </p>
            </div>
          </Col>
          <Col className={styles.cardContainer} lg={4}>
            <div className={styles.card}>
              <h2>Value</h2>
              <p>
                Ranking players in fantasy football is more than just laying out
                a numbered list of players. ADP, or average draft position, is
                heavily factored into our rankings. Players that we beleive will
                vastly excede their ADP will, of course, be highlighted in order
                for you to draft your league-winning steal
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Method;
