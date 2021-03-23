import React, { useState } from 'react';
import {Container, Row, Col, Spinner} from 'react-bootstrap';
import Params from './Params'
import Pokemons from './Pokemons'
import Logo from '../images/Logo.png'
import styles from '../scss/components/_App.module.scss'

const App = () => {

    const [search, setSearch] = useState(false)
    const [pokemons, setPokemons] = useState([])

    return (
        <Container>
            {/* title */}
            <Row>
                <Col className="my-5 d-flex justify-content-center">
                    <img className={styles.Logo} src={Logo}/>
                </Col>
            </Row>
            {/* params api */}
            <Params setSearch={setSearch} setPokemons={setPokemons} />
            {/* pokemons */}
            {!pokemons.length 
                ?   <Spinner className={styles.Spinner} animation="border" />
                :   <Pokemons search={search} pokemons={pokemons} />
            }
        </Container>
    )

}

export default App
