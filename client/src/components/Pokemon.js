import React from 'react';
import {Row, Col} from 'react-bootstrap'
import styles from '../scss/components/_Pokemon.module.scss'

const Pokemon = ({name, image}) => (
    <Row className={styles.RowPokemon}>
        <Col className={styles.ColPokemon}>
            <img src={image}/>
            <h3>{name}</h3>
        </Col>
    </Row>
)

export default Pokemon