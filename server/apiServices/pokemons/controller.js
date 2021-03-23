const axios = require('axios')

exports.get = async (req, res) => {

    try {

        const limit = req.query.limit ? req.query.limit : 5;
        const offset = req.query.offset ? req.query.offset : 0;
        const infoPokemons = [];
        const pokemons = [];

        const result = await axios.get('https://pokeapi.co/api/v2/pokemon', {params: {limit, offset}})

        if(result.data.results.length) {

            //save info url of each pokemon
            for(let element of result.data.results) {
                infoPokemons.push(axios.get(element.url))
            }

            //exec all info url
            const dataPokemons = await Promise.all(infoPokemons)

            //save info into pokemons array
            dataPokemons.forEach(info => {
                pokemons.push({id: info.data.id, 
                            name: info.data.name, 
                            image: info.data.sprites.front_default
                })
            })

            res.status(200).json({total: result.data.count,
                                  limit: parseInt(limit),
                                  offset: parseInt(offset),
                                  data: pokemons}) 

        }else {
            res.status(200).json({message: 'No se encontraron pokemones.'})
        }

    }catch (error) {
        res.status(500).json({message: 'Internal server error'})
    }

}

exports.getOne = async (req, res) => {

    try {

        const name = req.params.name;
        const functions = [];
        const pokemons = [];

        //get count all pokemons
        const dataPokemons = await axios.get('https://pokeapi.co/api/v2/pokemon')
        const countPokemons = dataPokemons.data.count;

        //get all pokemons
        const allPokemons = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${countPokemons}&offset=0`)

        //save url info of the pokemons search
        allPokemons.data.results.forEach(pokemon => {
            pokemon.name.includes(name) && functions.push(axios.get(pokemon.url))
        })

        //return info of the pokemons
        Promise.all(functions).then(data => {
            if(data.length) {
                data.forEach(pokemon => {
                    pokemons.push({ id: pokemon.data.id,
                                    name : pokemon.data.name ,
                                    abilities: pokemon.data.abilities,
                                    base_experience: pokemon.data.base_experience,
                                    forms: pokemon.data.forms,
                                    height: pokemon.data.height,
                                    location_area_encounters: pokemon.data.location_area_encounters,
                                    moves: pokemon.data.moves,
                                    order: pokemon.data.order,
                                    especies: pokemon.data.especies,
                                    sprites: pokemon.data.sprites,
                                    stats: pokemon.data.stats,
                                    types: pokemon.data.types,
                                    weight: pokemon.data.weight
                    })
                })
                res.status(200).json({pokemons})
            }else {
                res.status(200).json({message: 'Pokemon no encontrado.'})
            }
        })

    }catch (error) {
        res.status(500).json({message: 'Internal server error'})
    }

}