const request = require('supertest');
const app = require('../server');
const {pokemonsByName} = require('../utils/objectsTest');

//test endpoint all pokemons
describe('pokemons GET /', () => {

    it('responds with json containing a list of the pokemons with no limit and offset', done => {
        request(app)
            .get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })

    it('responds with json containing a list of the pokemons with limit and offset', done => {
        request(app)
            .get('/')
            .query({limit:40, offset:180})
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
    })

    it('responds with message "No se encontraron pokemones." when doesn`t find pokemons', done => {
        request(app)
            .get('/')
            .query({limit:20, offset:4000})
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect({message: 'No se encontraron pokemones.'})
            .end(err => {
                if(err) return done(err)
                done()
            })
    })

})

//test endpoint pokemons by name
describe('pokemons GET /:name', () => {

    it('responds with json containing a list of the pokemons with no limit and offset', done => {
        request(app)
            .get('/charm')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect(pokemonsByName)
            .end(err => {
                if(err) return done(err)
                done()
            })    
    })

    it('responds with message "Pokemon no encontrado." when doesn`t find name pokemon', done => {
        request(app)
            .get('/nico')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect({message: 'Pokemon no encontrado.'})
            .end(err => {
                if(err) return done(err)
                done()
            })
    })

})