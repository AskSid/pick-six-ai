import {React, useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PlayerCard from './PlayerCard'

const Board = ({ draftedPlayers }) => {

  return (
    <div>
      <h1>Draft Board</h1>
      <Container fluid>
          {draftedPlayers?.map((round, index) => 
            <Row>
                {
                (index % 2 === 0) ? 
                  (round?.map(player => 
                    <Col sm={Math.floor(12/(round.length))}>
                        <div className='bg-light'>
                            <PlayerCard key={player["-9999"]} player={player} name={player.Player} team={player.Tm} position={player.FantPos} clickable={false} />
                        </div>
                    </Col>
                  )) : 
                  (round?.map(player => 
                    <Col sm={Math.floor(12/(round.length))}>
                        <div className='bg-warning'>
                            <PlayerCard key={player["-9999"]} player={player} name={player.Player} team={player.Tm} position={player.FantPos} clickable={false} />
                        </div>
                    </Col>
                  ))
                }
            </Row>
          )}
      </Container>
    </div>
  )
}

export default Board
