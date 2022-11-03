import React from 'react'
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
