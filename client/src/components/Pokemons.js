import React from 'react';
import {Row, Col} from 'react-bootstrap'
import Pokemon from './Pokemon'
import styles from '../scss/components/_Pokemons.module.scss'

const Pokemons = ({search, pokemons}) => (
    <Row className={styles.RowPokemons}>
        <Col lg={3} xs={6} className={styles.ColPokemons}>
            {pokemons.length > 0 && 
                pokemons.map(info => 
                    <Pokemon key={info.id} id={info.id} name={info.name} image={search ? info.sprites.front_default : info.image}/>)
            }
        </Col>
    </Row>
)

export default Pokemons