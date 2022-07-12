import React, { useEffect, useState } from "react";
import NavBar from "../NavBar";
import Team from "./Team";
import Board from "./Board";
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
import db from "../../firebase";
import {collection, getDocs} from "firebase/firestore"

const MockDraft = () => {
  var myArr = JSON.parse(JSON.stringify(playersJson));

  const ref = collection(db, "players");

  const playersRef = db.collection("players");
  const [players, setPlayers] = useState([]);
  const [team, setTeam] = useState([]);
  const [draftedPlayers, setDraftedPlayers] = useState(
    [...Array(12)].map((e) => Array(8).fill(""))
  )


  const allPlayers = JSON.parse(JSON.stringify(playersJson))
  console.log(allPlayers[0].Rk)


  const [rounds, setRounds] = useState(12);
  const [teams, setTeams] = useState(8);

  const [userPick, setUserPick] = useState(0);
  const [currentPick, setCurrentPick] = useState(0);

  const [started, setStarted] = useState(false);
  const [userTurn, setUserTurn] = useState(true);
  const [userTurnTime, setUserTurnTime] = useState(30);

  /*
  // Getting players from firestore database
  useEffect(() => {
    getPlayers()
  }, [])
  function getPlayers() {
    playersRef.onSnapshot((querySnapshot) => {
      const playerDocs = []
      querySnapshot.forEach((doc) => {
        playerDocs.push(doc.data())
      })
      setPlayers(playerDocs)
    })
  }
  /*
    /*
    //ONE TIME GET FUNCTION
    function getPlayers2() {
      playersRef.get().then((item) => {
        const items = item.docs.map((doc) => doc.data());
        setPlayers(items);
      });
    }
    useEffect(() => {
      getPlayers2();
      // eslint-disable-next-line
    }, []);
    */

  //ONE TIME GET FUNCTION
  // function getPlayers2() {
  //   const play = playersRef.orderBy('fantasy-points', 'desc'); //THIS ORDERS PLAYERS BASED ON SOME METRIC -> Good for Ranking
  //   playersRef.get().then((item) => {
  //     const items = item.docs.map((doc) => doc.data());
  //     const rb = items.filter((x) =>  x.position == "QB"); //THIS FILTERS PLAYERS BASED ON SOME METRIC -> Good for Position Sorting
  //     setPlayers(items);
  //   });
  // }

  // useEffect(() => {
  //   getPlayers2();
  //   //eslint-disable-next-line
  // }, []);

  // useEffect(() => {
  //     const getUsers = async () => {
  //       const data = await getDocs(ref);
  //       setPlayers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
  //     };

  //     getUsers();
  // },[]);


  // Sets board size based on user input for rounds and teams
  useEffect(() => {
    if (!started) {
      if (rounds > 0 && teams > 0) {
        setDraftedPlayers([...Array(rounds)].map((e) => Array(teams).fill("")));
      }
    }
  }, [rounds, teams]);

  // Adds a player to the board, if the person adding a player is a user then it adds the player to their team
  function addPlayer(player, user) {
    if (user) {
      setTeam([...team, player]);
    }

    const tempPlayers = players.filter((item) => item !== player);
    setPlayers(tempPlayers);

    const currentRound = Math.floor(currentPick / teams);
    let tempDraftedPlayers = draftedPlayers[currentRound];
    tempDraftedPlayers[currentPick % teams] = player;

    setDraftedPlayers([
      ...draftedPlayers.slice(0, currentRound),
      tempDraftedPlayers,
      ...draftedPlayers.slice(currentRound + 1, rounds),
    ]);

    setCurrentPick(currentPick + 1);
    //setUserTurn(false)
  }

  /*
  function runAlgoTurn() {
    for (let i = 0; i < teams; i++) {
      addPlayer(players[0], false)
    }
    setUserTurn(true)
  }
  */

  // Runs game based on whether it is the user's turn or not
  /*
  useEffect(() => {
    if (userTurn) {
      setTimeout(setUserTurn(false), userTurnTime * 1000)
    } else {
      setTimeout(runAlgoTurn, teams * 3 * 1000)
    }
  }, [userTurn])
  */

  // Starts the game by giving the user a pick

  /*
  useEffect(() => {
    if (started) {
      setUserPick(Math.floor(Math.random() * (teams + 1)))
      console.log(userPick)
      if (userPick === 0) {
        setUserTurn(true)
      } else {
        setUserTurn(false)
      }
    }
  }, [started])
  */

  return (
    <div>
      <NavBar />
      <h1>Mock Draft</h1>
      <br />
      <Container fluid>
        <Row>
          <Col sm={4}>
            <InputGroup className="mb-3 w-50">
              <InputGroup.Text>Number of Teams</InputGroup.Text>
              <FormControl
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
                disabled={started}
                aria-label="num-rounds"
                onChange={(e) => setRounds(parseInt(e.target.value))}
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
        <Row>
          <Col sm={4}>
            <InputGroup className="mb-3 w-50">
              <InputGroup.Text>Time to Pick (seconds)</InputGroup.Text>
              <FormControl
                disabled={started}
                aria-label="num-teams"
                onChange={(e) => setUserTurnTime(parseInt(e.target.value))}
              />
            </InputGroup>
          </Col>
        </Row>
      </Container>
      <br />
      <Container fluid>
        <Row>
          <Col sm={2}>
            <Team team={team} />
          </Col>
          <Col sm={8}>
            <Board draftedPlayers={draftedPlayers} />
          </Col>
          <Col sm={2}>
            <AvailablePlayers
              players={allPlayers}
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
