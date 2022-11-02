import React from 'react'
import { AuthContext } from '../contexts/AuthContext/AuthContext';
import { messageService } from '../services/messageService';
// import { instance } from '../api/axiosInstance';
import useAxiosInstance from './useAxiosInstance';

export default function usePokemonService() {

    const { instance } = useAxiosInstance();

    const resourceUrl = '/pokemons';

    async function getPokemons(search) {
        const response = await instance.get(resourceUrl, {
            params: {
                search
            }
        })
        return response.data;
    }

    async function getPokemon(id) {
        const response = await instance.get(`${resourceUrl}/${id}`);
        return response.data;
    }

    return {
        getPokemons,
        getPokemon
    }
}
