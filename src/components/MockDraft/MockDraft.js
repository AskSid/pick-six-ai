import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import Team from "./Team";
import Board from "./Board/Board";
import AvailablePlayers from "./AvailablePlayers";
import playersJson from '../../players.json'
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

const MockDraft = () => {
  const allPlayers = JSON.parse(JSON.stringify(playersJson))
  useEffect(() => {
    setPlayers(allPlayers)
  }, [])

  const [players, setPlayers] = useState([])
  const [team, setTeam] = useState([])
  const [draftedPlayers, setDraftedPlayers] = useState(
    [...Array(12)].map((e) => Array(8).fill(""))
  )

  const [rounds, setRounds] = useState(12)
  const [teams, setTeams] = useState(16)

  const [userPick, setUserPick] = useState(4)
  const userStartPick = 4
  const [oddUserPick, setOddUserPick] = useState(true)
  const [currentPick, setCurrentPick] = useState(-1)

  const [userTurn, setUserTurn] = useState(false)
  const [userTurnTime, setUserTurnTime] = useState(30)

  const [started, setStarted] = useState(false)

  // Sets board size based on user input for rounds and teams
  useEffect(() => {
    if (!started) {
      if (rounds > 0 && teams > 0) {
        setDraftedPlayers([...Array(rounds)].map((e) => Array(teams).fill("")))
      }
    }
  }, [rounds, teams])

  // Adds a player to the board, if the person adding a player is a user then it adds the player to their team
  function addPlayer(player, user) {
    if (user) {
      setTeam([...team, player])
      setUserTurn(false)
    }

    const tempPlayers = players.filter((item) => item["-9999"] !== player["-9999"])
    setPlayers(tempPlayers)

    const currentRound = Math.floor(currentPick / teams)
    let tempDraftedPlayers = draftedPlayers[currentRound]
    //tempDraftedPlayers[currentPick % teams] = player
    
    if (currentRound % 2 === 0) {
      tempDraftedPlayers[currentPick % teams] = player
    } else {
      tempDraftedPlayers.reverse()
      //tempDraftedPlayers[teams - (currentPick % teams)] = player
      tempDraftedPlayers[currentPick % teams] = player
      tempDraftedPlayers.reverse()
    }
    
    setDraftedPlayers([
      ...draftedPlayers.slice(0, currentRound),
      tempDraftedPlayers,
      ...draftedPlayers.slice(currentRound + 1, rounds),
    ])
  }

  // Starts mock draft
  useEffect(() => {
    if (started) {
      setCurrentPick(0)
    }
  }, [started])

  // Handles each pick as either a user or algorithm turn
  useEffect(() => {
   if (currentPick < teams * rounds) {
    //if ((currentPick % teams) === userPick) {
      if (currentPick  === userPick) {
        userTurnHandler()
      } else if (currentPick >= 0) {
        algoTurnHandler()
      }
  }
  }, [currentPick])

  // Runs the user turn
  const userTurnHandler = async () => {
    setUserTurn(true)
    await new Promise(r => setTimeout(r, 2000))
    setUserTurn(false)
    setCurrentPick(currentPick + 1)
    if (oddUserPick === true) {
      console.log("TEST")
      setUserPick(userPick + 2 * (teams - userStartPick) - 1)
      console.log(userPick)

    } else {
      console.log("TEST2")
      setUserPick(userPick + 2 * userStartPick + 1)
      console.log(userPick)
    }
    setOddUserPick(!oddUserPick)
  }

  // Runs the algorithm turn
  const algoTurnHandler = async () => {
    await new Promise(r => setTimeout(r, 1000))
    addPlayer(players[0], false)
    setCurrentPick(currentPick + 1)
  }

  return (
    <div>
      <NavBar />
      <h1>Mock Draft</h1>
      <br />
      <Container fluid>
        <Row>
          <Col sm={4}>
            <InputGroup className="mb-3 w-50">
              <InputGroup.Text>Teams in League</InputGroup.Text>
              <FormControl
                defaultValue={8}
                disabled={started}
                aria-label="num-teams"
                onChange={(e) => setTeams(parseInt(e.target.value))}
              />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <InputGroup className="mb-3 w-50">
              <InputGroup.Text>Number of Rounds</InputGroup.Text>
              <FormControl
                defaultValue={12}
                disabled={started}
                aria-label="num-rounds"
                onChange={(e) => setRounds(parseInt(e.target.value))}
              />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <InputGroup className="mb-3 w-50">
              <InputGroup.Text>Time for Pick (sec)</InputGroup.Text>
              <FormControl
                defaultValue={60}
                disabled={started}
                aria-label="num-teams"
                onChange={(e) => setUserTurnTime(parseInt(e.target.value))}
              />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <InputGroup className="mb-3 w-50">
              <InputGroup.Text>Your Draft Position</InputGroup.Text>
              <FormControl
                defaultValue={4}
                disabled={started}
                aria-label="pick-sum"
                //onChange={(e) => ((e.target.value > 0) && (e.target.value <= teams)) ? setUserPick(parseInt(e.target.value - 1)) : setUserPick(4)}
                onChange={(e) => ((e.target.value > 0) && (e.target.value <= teams)) ? userPick = parseInt(e.target.value - 1) : userPick = 4}

              />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <Button variant="primary" onClick={(e) => setStarted(!started)}>
              {started ? "Stop Draft" : "Start Mock Draft"}
            </Button>
          </Col>
        </Row>
      </Container>
      <br />
      <Container fluid>
        <Row>
          <Col sm={2}>
            <Team team={team} />
          </Col>
          <Col sm={12}>
            <Board draftedPlayers={draftedPlayers} />
          </Col>
          <Col sm={2}>
            <AvailablePlayers
              players={players}
              clickable={userTurn}
              addPlayer={addPlayer}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MockDraft;
