import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PlayerCard from './PlayerCard'

const Board = ({ draftedPlayers }) => {

  return (
    <div>
      <h1>Draft Board</h1>
      <Container fluid>
          {draftedPlayers?.map(round => 
            <Row>
                {round?.map(team => 
                    <Col sm={8/(round.length)}>
                        <div className='bg-light'>
                            <PlayerCard />
                        </div>
                    </Col>
                )}
            </Row>
          )}
          <Row>
              <Col sm={4/3}></Col>
          </Row>
      </Container>
    </div>
  )
}

export default Board
