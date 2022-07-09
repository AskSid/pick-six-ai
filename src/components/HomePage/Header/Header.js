import React from "react";
import styles from "./Header.module.css"
import {Container, Row, Col} from "react-bootstrap"

function Header () {
    return(
        <>
            <Container>
                <Row>
                    <Col sm={7} className={styles.titleContainer}>
                        <h1 className={styles.title}>
                            Fantasy Football Driven by Data
                        </h1>
                        <p>Drien by the fastest algorithm the world has every seen</p>
                    </Col>
                </Row>
            </Container>
        </>
    );   
}

export default Header;