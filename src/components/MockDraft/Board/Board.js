import { React, useState } from "react";
import styles from "./Board.module.css";
import { Container, Row, Col } from "react-bootstrap";
import PlayerCard from "../PlayerCard/PlayerCard";

const Board = ({ draftedPlayers }) => {
  return (
    <div>
      <h1>Draft Board</h1>
      <Container className={styles.board}>
        {draftedPlayers?.map((round, index) =>
          index % 2 === 0 ? (
            <div className={styles.row}>
              {round?.map((player) => (
                <div>
                  <PlayerCard
                    key={player["-9999"]}
                    player={player}
                    name={player.Player}
                    team={player.Tm}
                    position={player.FantPos}
                    clickable={false}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.rowReverse}>
              {round?.map((player) => (
                <div>
                  <PlayerCard
                    key={player["-9999"]}
                    player={player}
                    name={player.Player}
                    team={player.Tm}
                    position={player.FantPos}
                    clickable={false}
                  />
                </div>
              ))}
            </div>
          )
        )}
      </Container>
    </div>
  );
};

export default Board;
