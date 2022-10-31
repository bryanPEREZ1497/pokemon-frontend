import axios from 'axios';
import authService from './authService';

// const api = 'https://pokeapi-expressjs.herokuapp.com/api/v1/pokemons';
const api = 'http://localhost:3000/api/v1/pokemons';

const instance = axios.create({
    baseURL: api,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

const pokemonService = {};

pokemonService.getPokemons = async (search = '') => {

    const response = await instance.get('', {
        params: {
            search
        },
        headers: {
            'Authorization': `Bearer ${authService.getToken()}`
        }
    });
    return response.data;
}

pokemonService.getPokemon = async (id) => {
    const response = await instance.get(`${api}/${id}`, {
        headers: {
            'Authorization': `Bearer ${authService.getToken()}`
        }
    });
    return response.data;
}

export default pokemonService;
