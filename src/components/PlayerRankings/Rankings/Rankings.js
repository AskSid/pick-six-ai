import React, { useEffect, useState, useCallback } from "react";
import playersJson from "../../../players.json";
import PlayerInfo from "../PlayerInfo/PlayerInfo";
import PlayerRow from "../PlayerRow/PlayerRow";
import RankingsKey from "../RankingsKey/RankingsKey";
import RankingsScoring from "../RankingsScoring/RankingsScoring";
import RankingsSelect from "../RankingsSelect/RankingsSelect";
import styles from "./Rankings.module.css";

function Rankings(props) {
  const allPlayers = JSON.parse(JSON.stringify(playersJson));

  const [currentPos, setCurrentPos] = useState(["QB"]);

  var posRank = {
    QB: 0,
    RB: 0,
    WR: 0,
    TE: 0,
    k: 0,
    DEF: 0,
  };

  var num = 0;

  const players = allPlayers.filter((p) => currentPos.includes(p.FantPos));

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

  const [displayInfo, setDisplayInfo] = useState(true);

  const setScore = (s) => {
    setScoring(s);
    setDisplayInfo(false);
  };

  const setPosition = (p) => {
    setCurrentPos(p);
    setDisplayInfo(false);
  };

  const [scoring, setScoring] = useState("PPR");

  const sortedPlayers = players.sort(GetSortOrder(scoring));

  return (
    <div className={styles.body}>
      <RankingsScoring setScoring={setScore} />
      <RankingsSelect setPosition={setPosition} />
      <RankingsKey/>
      {sortedPlayers.map((p) => (
        <PlayerRow
          key={num}
          rank={++posRank[p.FantPos]}
          num={num++}
          player={p}
          change={displayInfo}
          setChange={setDisplayInfo}
        />
      ))}
    </div>
  );
}

export default Rankings;
