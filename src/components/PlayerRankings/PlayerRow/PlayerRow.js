import React, {useEffect, useState} from "react";
import styles from "./PlayerRow.module.css";
import { AiOutlineInfoCircle } from "react-icons/ai";
import PlayerInfo from "../PlayerInfo/PlayerInfo";



function PlayerRow({ rank, num, player, display}) {

  var mainStyle = num % 2 == 0 ? styles.main: styles.main2;

  var [displayInfo, setDisplayInfo] = useState(false);

  return (
    <>
      <div className={styles.line}> </div>
      <div className={mainStyle}>
        <div className={styles.rank}>
          <p>{rank}</p>
        </div>
        <div className={styles.name}>
          <p>
            {player.Player} 
            <a href="javascript:void(0)">
              <AiOutlineInfoCircle 
                className={styles.info}
                onClick={() => setDisplayInfo(!displayInfo)}
              />
            </a>
            </p>
        </div>
        <div className={styles.team}>
          <p>{player.Tm}</p>
        </div>
      </div>
      <div className={styles.line}> </div>
      <PlayerInfo 
        display={displayInfo} 
        player={player}
      />
    </>
  );
}

export default PlayerRow;
