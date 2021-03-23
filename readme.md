# Pokemon APP
App client/server that return pokemons by limit or name

# How to use 

### Clone the repo:
```sh
git clone https://github.com/NicolasOliva/pokemon_api
cd pokemon_api
```

## First load API

### Install dependencies:
```sh
cd server
npm install
```
### Start server:
run port: 4000
```sh
npm run start
```

### Start development mode:
```sh
npm run dev
```

### Run test:
```sh
npm run test
```

### Endpoints

```bash
GET / # return pokemons through limit and offset parameters
GET /:name # return pokemons through the name of the pokemon
```

## Second load Client

(On another console)
```sh
cd pokemon_api
```

### Install dependencies:
```sh
cd client
npm install
```
### Start client:
run port: 3000
```sh
npm run start
```

## License

  [MIT](LICENSE)
