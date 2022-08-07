import { React, useEffect, useState } from "react";
import styles from "./PlayerCard.module.css";

const PlayerCard = ({
  clickable,
  addPlayer,
  player,
  name,
  position,
  team,
  pick,
}) => {
  const positions = new Map();
  positions.set("QB", styles.qb);
  positions.set("RB", styles.rb);
  positions.set("WR", styles.wr);
  positions.set("TE", styles.te);
  positions.set(undefined, styles.none);

  const positionsClick = new Map();
  positionsClick.set("QB", styles.qbClick);
  positionsClick.set("RB", styles.rbClick);
  positionsClick.set("WR", styles.wrClick);
  positionsClick.set("TE", styles.teClick);
  positionsClick.set(undefined, styles.noneClick);

  const nameSplit = ["", ""];
  if (name != undefined) {
    nameSplit[0] = String(name).split(" ")[0];
    nameSplit[1] = String(name).split(" ")[1];
  }

  const pickNum = pick ? <p className={styles.pick}>{pick}</p> : null;

  return (
    <div>
      {clickable ? (
        <button
          className={positionsClick.get(position)}
          onClick={() => {
            addPlayer(player, true);
          }}
        >
          <p className={styles.text}>{nameSplit[0]}</p>
          <p className={styles.text}>{nameSplit[1]}</p>
          <p className={styles.text}>
            {team} - {position}
          </p>
        </button>
      ) : (
        <div className={positions.get(position)}>
          {pickNum}
          <p className={styles.text}>{nameSplit[0]}</p>
          <p className={styles.text}>{nameSplit[1]}</p>
          <p className={styles.text}>
            {team} - {position}
          </p>
        </div>
      )}
    </div>
  );
};

export default PlayerCard;
