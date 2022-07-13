import React from "react";
import styles from "./PlayerRow.module.css";
import { AiOutlineInfoCircle } from "react-icons/ai";



function PlayerRow({ rank, playerName, team, num }) {

  var mainStyle = num % 2 == 0 ? styles.main: styles.main2;

  return (
    <>
      <div className={mainStyle}>
        <div className={styles.rank}>
          <p className={styles.lol}>{rank}</p>
        </div>
        <div className={styles.name}>
          <p>{playerName} <a href="javascript:void(0)"><AiOutlineInfoCircle className={styles.info}/></a></p>
        </div>
        <div className={styles.team}>
          <p>{team}</p>
        </div>
      </div>
      <div className={styles.line}> 
      </div>
    </>
  );
}

export default PlayerRow;
