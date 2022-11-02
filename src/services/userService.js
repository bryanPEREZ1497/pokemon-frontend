import axios from 'axios';
import authService from './authService';

// const api = 'https://pokeapi-expressjs.herokuapp.com/api/v1/users/pokemons/favorites';
const api = 'http://localhost:3000/api/v1/users/pokemons/favorites';

const instance = axios.create({
    baseURL: api,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    config.headers['Authorization'] = `Bearer ${authService.getToken()}`;
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

const userService = {};

userService.getPokemons = async () => {
    const response = await instance.get('', {});
    return response.data;
}

userService.addFavoritePokemon = async (id) => {
    const response = await instance.patch(`/${id}`, {}, {});
    return response.data;
}

userService.deleteFavoritePokemon = async (id) => {
    const response = await instance.delete(`/${id}`, {});
    return response.data;
}

export default userService;
