import axios from 'axios';
import authService from './authService';

const api = 'http://localhost:3000/api/v1/pokemons';

const instance = axios.create({
    baseURL: api,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${authService.getToken()}`
    },
});

const pokemonService = {};

pokemonService.getPokemons = async (search = '') => {

    const response = await instance.get('', {
        params: {
            search
        },

    });
    return response.data;
}

pokemonService.getPokemon = async (id) => {
    const response = await instance.get(`${api}/${id}`);
    return response.data;
}

export default pokemonService;
