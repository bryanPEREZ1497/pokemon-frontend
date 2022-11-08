import React from 'react'
import useAxiosInstance from './useAxiosInstance';

export default function useUserService() {

    const { instance } = useAxiosInstance();

    const resourceUrl = '/users';

    async function getPokemons() {
        const response = await instance.get(`${resourceUrl}/pokemons/favorites`, {});
        return response.data;
    }

    async function addFavoritePokemon(id) {
        const response = await instance.patch(`${resourceUrl}/pokemons/favorites/${id}`, {}, {});
        return response.data;
    }

    async function deleteFavoritePokemon(id) {
        const response = await instance.delete(`${resourceUrl}/pokemons/favorites/${id}`, {});
        return response.data;
    }

    return {
        getPokemons,
        addFavoritePokemon,
        deleteFavoritePokemon
    }
}
