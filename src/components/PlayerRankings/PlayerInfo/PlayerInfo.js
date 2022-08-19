import React, { useState } from "react";
import styles from "./PlayerInfo.module.css";
import { Container, Row, Col } from "react-bootstrap";
import playersJson from "../../../twitter/filtered_tweets.json";

function PlayerInfo({ display, player, change, info }) {
  var posStats = {
    QB: (
      <>
        {" "}
        <div className={styles.stats}>
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
        </div>
        <br></br>
        <div className={styles.stats}>
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
        </div>
      </>
    ),
    RB: (
      <>
        {" "}
        <div className={styles.stats}>
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
        </div>
        <br></br>
        <div className={styles.stats}>
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
        </div>
      </>
    ),
    WR: (
      <>
        {" "}
        <div className={styles.stats}>
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
        </div>
        <br></br>
        <div className={styles.stats}>
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
        </div>
      </>
    ),
    TE: (
      <>
        {" "}
        <div className={styles.stats}>
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
        </div>
        <br></br>
        <div className={styles.stats}>
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
        </div>
      </>
    ),
    k: (
      <>
        {" "}
        <div className={styles.stats}>
          <div className={styles.statistics1}>
            <p className={styles.games}>GAMES</p>
            <p className={styles.attempts}>FG%</p>
            <p className={styles.yds}>LONG</p>
            <p className={styles.avg}>XPM</p>
          </div>
          <div className={styles.statistics2}>
            <p className={styles.games}>{player.G}</p>
            <p className={styles.attempts}>{(player.FGM[5]/player.FGA[5]).toFixed(2)}</p>
            <p className={styles.yds}>{player.Lng[0]}</p>
            <p className={styles.avg}>{player.XPM}</p>
          </div>
        </div>
        <br></br>
        <div className={styles.stats}>
          <div className={styles.statistics1}>
            <p className={styles.games}>20+</p>
            <p className={styles.attempts}>30+</p>
            <p className={styles.yds}>40+</p>
            <p className={styles.avg}>50+</p>
          </div>
          <div className={styles.statistics2}>
            <p className={styles.games}>{player.FGM[1]}</p>
            <p className={styles.attempts}> {player.FGM[2]}</p>
            <p className={styles.yds}>{player.FGM[3]}</p>
            <p className={styles.avg}>{player.FGM[4]}</p>
          </div>
        </div>
      </>
    ),
    DEF: (
      <>
        <div className={styles.stats}>
          <div className={styles.statistics1}>
            <p className={styles.games}>SACKS</p>
            <p className={styles.attempts}>INT</p>
            <p className={styles.yds}>DEFTD</p>
            <p className={styles.avg}>SPCTD</p>
          </div>
          <div className={styles.statistics2}>
            <p className={styles.games}>{player.Sack}</p>
            <p className={styles.attempts}>{player.Int}</p>
            <p className={styles.yds}>{player.DefTD}</p>
            <p className={styles.avg}>{player.SpcTD}</p>
          </div>
        </div>
        <br></br>
        <div className={styles.stats}>
          <div className={styles.statistics1}>
          <p className={styles.games}>Safety</p>
            <p className={styles.attempts}>FF</p>
            <p className={styles.yds}>FR</p>
          </div>
          <div className={styles.statistics2}>
            <p className={styles.games}>
              {player.Safety}
            </p>
            <p className={styles.attempts}>{player.FF}</p>
            <p className={styles.yds}>{player.FR}</p>
          </div>
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
      return (
        <div className={styles.tweet}>
          <p>There is no recent news for this player.</p>
        </div>
      );
    }

    return filtered_players[name].map((tweet) => (
      <>
        <div className={styles.tweet}>
          <p>{"@" + tweet["author"]}</p>
          <p>{tweet["time"]}</p>
          <p>{tweet["text"]}</p>
        </div>
      </>
    ));
  };

  function GetSortOrder(prop) {
    return function (a, b) {
      if (a[prop] < b[prop]) {
        return 1;
      } else if (a[prop] > b[prop]) {
        return -1;
      }
      return 0;
    };
  }

  for (let player in filtered_players) {
    filtered_players[player] = filtered_players[player].sort(
      GetSortOrder(["id"])
    );
  }

  return (
    <>
      <div className={activeStyle}>
        <Row>
          <Col className={styles.section} lg={4}>
            <h2 className={styles.title}>Pick Six Analysis</h2>
            <div className={styles.overviewBox}>
              <p className={styles.overview}>{info}</p>
            </div>
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
