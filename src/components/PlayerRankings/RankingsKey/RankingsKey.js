import React from "react";
import styles from "./RankingsKey.module.css";

function RankingsKey(props) {
  return (
    <div className={styles.main}>
      <p className={styles.rank}>RK</p>

      <p className={styles.name}>
        NAME
      </p>

      <p className={styles.team}>TEAM</p>
    </div>
  );
}

export default RankingsKey;
