import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import Team from './Team'
import Board from './Board'
import AvailablePlayers from './AvailablePlayers'
import { Container, Row, Col } from 'react-bootstrap';
import db from '../firebase'


const MockDraft = () => {
  const playersRef = db.collection('players')
  const [players, setPlayers] = useState([])
  const [team, setTeam] = useState([])
  const [draftedPlayers, setDraftedPlayers] = useState([[[],[],[],[],[],[],[],[]], [[],[],[],[],[],[],[],[]], [[],[],[],[],[],[],[],[]], [[],[],[],[],[],[],[],[]]])

  function getPlayers() {
    playersRef.onSnapshot((querySnapshot) => {
      const playerDocs = []
      querySnapshot.forEach((doc) => {
        playerDocs.push(doc.data())
      })
      setPlayers(playerDocs)
      setTeam(playerDocs.slice(0, 4))
    })
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
            <AvailablePlayers players={players}/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MockDraft
