const express = require('express'),
      pokemonsController = require('./controller'),
      router = express.Router();

//get all pokemons
router.get('/', pokemonsController.get)

router.get('/:name', pokemonsController.getOne)

module.exports = router