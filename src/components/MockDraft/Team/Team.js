import React from "react";
import styles from "./Team.module.css";
import PlayerCard from "../PlayerCard/PlayerCard";

const Team = ({ team }) => {
  return (
    <div>
      <h1 className={styles.title}>My Team</h1>
      <div className={styles.main}>
        {team?.map((player) => (
          <PlayerCard
            player={player}
            name={player.Player}
            team={player.Tm}
            position={player.FantPos}
            clickable={false}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
