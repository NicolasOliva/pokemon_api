import React, {useState, useEffect} from 'react';
import {Row, Col, Form, Button} from 'react-bootstrap'
import axios from 'axios'
import styles from '../scss/components/_Params.module.scss'

const Params = ({setSearch, setPokemons}) => {

    const [limit, setLimit] = useState(5)
    const [offset, setOffset] = useState(0)
    const [name, setName] = useState(null)

    useEffect(() => {
        getPokemons()
    },[])

    const loadPokemons = (e) => {
        e.preventDefault()
        getPokemons()
    }

    const getPokemons = () => {
        setPokemons([])
        axios.get('http://localhost:4000', {params: {limit, offset}})
            .then(result => {
                setSearch(false)
                result.data.data && setPokemons(result.data.data)
            })
    }

    const searchPokemon = (e) => {
        e.preventDefault()
        setPokemons([])
        axios.get(`http://localhost:4000/${name.toLowerCase()}`)
        .then(result => {
            result.data.pokemons && setPokemons(result.data.pokemons)
            setSearch(true)
        })
    }

    return (
        <Row className={styles.box}>
            {/* load */}
            <Col lg={6} className={styles.boxParams}>
                <h3>Cargar</h3>
                <Form onSubmit={loadPokemons} className={styles.Params}>
                        <Form.Label><p>Límite:</p>
                            <Form.Control className={styles.inputLoad} size="sm" type="number" value={limit} onChange={e => setLimit(e.target.value)} name="limit"/>
                        </Form.Label>
                        <Form.Label><p>Desplazamiento:</p>
                            <Form.Control className={styles.inputLoad} size="sm" type="number" value={offset} onChange={e => setOffset(e.target.value)} name="offset"/>
                        </Form.Label>
                    <Button size="sm" type="submit">Cargar</Button>
                </Form>
            </Col>
            {/* search */}
            <Col lg={4} className={styles.boxParams}>
                <h3>Buscar</h3>
                <Form onSubmit={searchPokemon} className={styles.Params}>
                        <Form.Label><p>Buscar:</p>
                            <Form.Control className={styles.inputSearch} size="sm" type="text" placeholder="charmander" onChange={e => setName(e.target.value)} name="limit"/>
                        </Form.Label>
                    <Button size="sm" type="submit">Buscar</Button>
                </Form>
            </Col>
        </Row>
    )

}

export default Params