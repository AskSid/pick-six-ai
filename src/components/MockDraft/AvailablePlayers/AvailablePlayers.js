import React, { useState } from "react";
import styles from "./AvailablePlayers.module.css";
import PlayerCard from "../PlayerCard/PlayerCard";
import AvailablePlayerFilter from "../AvailablePlayerFilter/AvailablePlayerFilter";

const AvailablePlayers = ({ players, clickable, addPlayer }) => {

  const [currentPos, setCurrentPos] = useState(["QB", "RB", "WR", "TE"]);

  var posRank = {
    QB: 0,
    RB: 0,
    WR: 0,
    TE: 0,
    K: 0,
    DEF: 0,
  };

  const filteredPlayers = players.filter((p) => currentPos.includes(p.FantPos));

  return (
    <div>
      <h1 className={styles.title}>Available Players</h1>
      <AvailablePlayerFilter setPosition={setCurrentPos}/>
      <div className={styles.main}>
        {filteredPlayers?.map((player) => (
          <PlayerCard
            player={player}
            key={player["-9999"]}
            name={player.Player}
            team={player.Tm}
            position={player.FantPos}
            clickable={clickable}
            addPlayer={addPlayer}
          />
        ))}
      </div>
    </div>
  );
};

export default AvailablePlayers;
