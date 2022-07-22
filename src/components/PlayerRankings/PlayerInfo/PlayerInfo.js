import React, { useState } from "react";
import styles from "./PlayerInfo.module.css";
import { Container, Row, Col } from "react-bootstrap";
import playersJson from "../../twitter/filtered_tweets.json";

function PlayerInfo({ display, player, change, info }) {
  const posStats = {
    QB: (
      <>
        {" "}
        <div className={styles.statistics1}>
          <p className={styles.games}>GAMES</p>
          <p className={styles.attempts}>CMP%</p>
          <p className={styles.yds}>PAYDS</p>
          <p className={styles.avg}>PATDS</p>
        </div>
        <div className={styles.statistics2}>
          <p className={styles.games}>{player.G}</p>
          <p className={styles.attempts}>
            {Math.round((player.Cmp / player.Att[0]) * 100)}
          </p>
          <p className={styles.yds}>{player.Yds[0]}</p>
          <p className={styles.avg}>{player.TD[0]}</p>
        </div>
        <br></br>
        <div className={styles.statistics1}>
          <p className={styles.games}>INTs</p>
          <p className={styles.attempts}>RYDS</p>
          <p className={styles.yds}>RTDs</p>
          <p className={styles.avg}>RANK</p>
        </div>
        <div className={styles.statistics2}>
          <p className={styles.games}>{player.Int}</p>
          <p className={styles.attempts}>{player.Yds[1]}</p>
          <p className={styles.yds}>{player.TD[1]}</p>
          <p className={styles.avg}>{player.PosRank}</p>
        </div>
      </>
    ),
    RB: (
      <>
        {" "}
        <div className={styles.statistics1}>
          <p className={styles.games}>GAMES</p>
          <p className={styles.attempts}>ATT</p>
          <p className={styles.yds}>RSHYDS</p>
          <p className={styles.avg}>AVG</p>
        </div>
        <div className={styles.statistics2}>
          <p className={styles.games}>{player.G}</p>
          <p className={styles.attempts}>{player.Att[1]}</p>
          <p className={styles.yds}>{player.Yds[1]}</p>
          <p className={styles.avg}>{player.Y["A"]}</p>
        </div>
        <br></br>
        <div className={styles.statistics1}>
          <p className={styles.games}>REC</p>
          <p className={styles.attempts}>RECYDS</p>
          <p className={styles.yds}>TDs</p>
          <p className={styles.avg}>RANK</p>
        </div>
        <div className={styles.statistics2}>
          <p className={styles.games}>{player.Rec}</p>
          <p className={styles.attempts}>{player.Yds[2]}</p>
          <p className={styles.yds}>{player.TD[3]}</p>
          <p className={styles.avg}>{player.PosRank}</p>
        </div>
      </>
    ),
    WR: (
      <>
        {" "}
        <div className={styles.statistics1}>
          <p className={styles.games}>GAMES</p>
          <p className={styles.attempts}>REC</p>
          <p className={styles.yds}>TGTs</p>
          <p className={styles.avg}>YDS</p>
        </div>
        <div className={styles.statistics2}>
          <p className={styles.games}>{player.G}</p>
          <p className={styles.attempts}>{player.Rec}</p>
          <p className={styles.yds}>{player.Tgt}</p>
          <p className={styles.avg}>{player.Yds[2]}</p>
        </div>
        <br></br>
        <div className={styles.statistics1}>
          <p className={styles.games}>Y/R</p>
          <p className={styles.attempts}>FMBLs</p>
          <p className={styles.yds}>TDs</p>
          <p className={styles.avg}>RANK</p>
        </div>
        <div className={styles.statistics2}>
          <p className={styles.games}>
            {(player.Yds[2] / player.Rec).toFixed(2)}
          </p>
          <p className={styles.attempts}>{player.Fmb}</p>
          <p className={styles.yds}>{player.TD[3]}</p>
          <p className={styles.avg}>{player.PosRank}</p>
        </div>
      </>
    ),
    TE: (
      <>
        {" "}
        <div className={styles.statistics1}>
          <p className={styles.games}>GAMES</p>
          <p className={styles.attempts}>REC</p>
          <p className={styles.yds}>TGTs</p>
          <p className={styles.avg}>YDS</p>
        </div>
        <div className={styles.statistics2}>
          <p className={styles.games}>{player.G}</p>
          <p className={styles.attempts}>{player.Rec}</p>
          <p className={styles.yds}>{player.Tgt}</p>
          <p className={styles.avg}>{player.Yds[2]}</p>
        </div>
        <br></br>
        <div className={styles.statistics1}>
          <p className={styles.games}>Y/R</p>
          <p className={styles.attempts}>FMBLs</p>
          <p className={styles.yds}>TDs</p>
          <p className={styles.avg}>RANK</p>
        </div>
        <div className={styles.statistics2}>
          <p className={styles.games}>
            {(player.Yds[2] / player.Rec).toFixed(2)}
          </p>
          <p className={styles.attempts}>{player.Fmb}</p>
          <p className={styles.yds}>{player.TD[3]}</p>
          <p className={styles.avg}>{player.PosRank}</p>
        </div>
      </>
    ),
  };

  const filtered_players = JSON.parse(JSON.stringify(playersJson));

  var activeStyle = display ? styles.mainActive : styles.main;

  if (!display || !change) {
    return null;
  }

  const news = () => {
    const name = player.Player;
    if (filtered_players[name].length == 0) {
      return <p>No recent news reported.</p>;
    }
    return filtered_players[name].map((tweet) => (
      <>
        <div className={styles.tweet}>
          <p>{"@"+tweet["author"]}</p>
          <p>{tweet["time"]}</p>
          <p>{tweet["text"]}</p>
        </div>
      </>
    ));
  };

  return (
    <>
      <div className={activeStyle}>
        <Row>
          <Col className={styles.section} lg={4}>
            <h2 className={styles.title}>Pick Six Analysis</h2>
            <p className={styles.overview}>{info}</p>
          </Col>
          <Col className={styles.section} lg={3}>
            <h2 className={styles.title}>2021 Statistics</h2>
            {posStats[player.FantPos]}
          </Col>
          <Col className={styles.section} lg={5}>
            <h2 className={styles.title}>Recent News</h2>
            <p>{news()}</p>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default PlayerInfo;
