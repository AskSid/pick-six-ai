import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar'
import Team from './Team'
import Board from './Board'
import AvailablePlayers from './AvailablePlayers'
import { Container, Row, Col } from 'react-bootstrap';
import db from '../../firebase'


const MockDraft = () => {
  const playersRef = db.collection('players')
  const [players, setPlayers] = useState([])
  const [team, setTeam] = useState([])
  const [draftedPlayers, setDraftedPlayers] = useState([...Array(12)].map(e => Array(8).fill('')))
  const [currentPick, setCurrentPick] = useState(1)
  const [playerTurn, setPlayerTurn] = useState(true)
  const rounds = 12
  const teams = 8

  function getPlayers() {
    playersRef.onSnapshot((querySnapshot) => {
      const playerDocs = []
      querySnapshot.forEach((doc) => {
        playerDocs.push(doc.data())
      })
      setPlayers(playerDocs)
    })
  }

  function addPlayer(player) {
    setTeam([...team, player])
    const tempPlayers = players.filter(item => item !== player)
    setPlayers(tempPlayers)

    const currentRound = Math.floor(currentPick / teams)
    let tempDraftedPlayers = draftedPlayers[currentRound]
    tempDraftedPlayers[(currentPick % teams) - 1] = player
    
    setDraftedPlayers([
      ...draftedPlayers.slice(0, currentRound),
      tempDraftedPlayers,
      ...draftedPlayers.slice(currentRound + 1, rounds)
    ])
    
    setCurrentPick(currentPick + 1)
    setPlayerTurn(false)
  }

  useEffect(() => {
    getPlayers()
  }, [])

  return (
    <div>
      <NavBar />
      <h1>Mock Draft</h1>
      <Container fluid >
        <Row>
          <Col sm={2} >
            <Team team={team}/>
          </Col>
          <Col sm={8} >
            <Board draftedPlayers={draftedPlayers}/>
          </Col>
          <Col sm={2} >
            <AvailablePlayers players={players} clickable={playerTurn} addPlayer={addPlayer}/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MockDraft
