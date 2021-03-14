const express = require('express'),
      pokemons = require('../apiServices/pokemons/route'),
      router = express.Router();

//get all pokemons
router.use('/', pokemons)

module.exports = router