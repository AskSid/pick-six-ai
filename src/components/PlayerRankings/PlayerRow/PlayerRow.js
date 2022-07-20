import React, { useEffect, useState } from "react";
import styles from "./PlayerRow.module.css";
import { AiOutlineInfoCircle } from "react-icons/ai";
import PlayerInfo from "../PlayerInfo/PlayerInfo";

function PlayerRow({ rank, num, player, change, setChange }) {
  var mainStyle = num % 2 == 0 ? styles.main : styles.main2;

  var [displayInfo, setDisplayInfo] = useState(false);

  useEffect(() => {
    if (!change) {
      setDisplayInfo(false);
    }
  }, [change]);

  const click = (d) => {
    setDisplayInfo(!d);
    setChange(true);
  };

  const analysis = player.analysis != null ? player.analysis : "No player info available at this time."

  return (
    <>
      <div className={styles.line}> </div>
      <div className={mainStyle}>
        <p className={styles.rank}>{player.FantPos + rank}</p>

        <p className={styles.name}>
          {player.Player}
          <a href="javascript:void(0)">
            <AiOutlineInfoCircle
              className={styles.info}
              onClick={() => click(displayInfo)}
            />
          </a>
        </p>

        <p className={styles.team}>{player.Tm}</p>
      </div>
      <div className={styles.line}> </div>
      <PlayerInfo
        display={displayInfo}
        player={player}
        change={change}
        info={analysis}
      />
    </>
  );
}

export default PlayerRow;
