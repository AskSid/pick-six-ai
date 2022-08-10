import { React, useState } from "react";
import styles from "./Board.module.css";
import { Container, Row, Col } from "react-bootstrap";
import PlayerCard from "../PlayerCard/PlayerCard";

var num = 0.01;

function nextPick() {
  num = num + 0.01;
}

function nextPick2() {
  max = max - 0.01;
}

function resetPick() {
  num = 0.01;
}

var max = 0;

function getMaxPick(x) {
  if (x > max) {
    max = x;
  }
}

function generateNames() {
  for (let i = 0; i < 1; i++) {
      <h1>hello</h1>
  }
}

const Board = ({ draftedPlayers, userPick }) => {
  return (
    <>
      <h1 className={styles.title}>Draft Board</h1>
      <div className={styles.board}>
        <Container>
          
          {generateNames()}

          {draftedPlayers?.map((round, index) =>
            index % 2 === 0 ? (
              <>
                {" "}
                <div className={styles.row}>
                  {round?.map((player) => (
                    <>
                      <div>
                        <PlayerCard
                          key={player["-9999"]}
                          player={player}
                          name={player.Player}
                          team={player.Tm}
                          position={player.FantPos}
                          clickable={false}
                          pick={(index + 1 + num).toFixed(2)}
                          available={false}
                        />
                      </div>
                      {getMaxPick(num)}
                      {nextPick()}
                    </>
                  ))}
                </div>
                {resetPick()}
              </>
            ) : (
              <>
                {" "}
                <div className={styles.rowReverse}>
                  {round?.map((player) => (
                    <>
                      <div>
                        <PlayerCard
                          key={player["-9999"]}
                          player={player}
                          name={player.Player}
                          team={player.Tm}
                          position={player.FantPos}
                          clickable={false}
                          pick={(index + 1 + max).toFixed(2)}
                        />
                      </div>
                      {nextPick2()}
                    </>
                  ))}
                </div>
                {resetPick()}
              </>
            )
          )}
        </Container>
      </div>
    </>
  );
};

export default Board;
