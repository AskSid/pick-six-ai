import React, { useEffect, useState, useCallback} from "react";
import playersJson from "../../../players.json";
import PlayerInfo from "../PlayerInfo/PlayerInfo";
import PlayerRow from "../PlayerRow/PlayerRow";
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
    K: 0,
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

  const setScore = (s) => {
    setScoring(s);
  }

  const [scoring, setScoring] = useState("PPR");

  const sortedPlayers = players.sort(GetSortOrder(scoring));

  return (
    <div className={styles.body}>
      <RankingsScoring setScoring={setScore} />
      <RankingsSelect setPosition={setCurrentPos} />
      {sortedPlayers.map((p) => (
        <PlayerRow
          key={num}
          rank={p.FantPos + ++posRank[p.FantPos]}
          num={num++}
          player={p}
          display={false}
        />
      ))}
    </div>
  );
}

export default Rankings;
