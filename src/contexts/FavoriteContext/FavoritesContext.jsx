import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import useUserService from "../../hooks/useUserService";
import { AuthContext } from "../AuthContext/AuthContext";
import FavoritesReducer, { actionTypes } from "./FavoritesReducer";

export const FavoritesContext = createContext([]);

export default function FavoritesProvider({ children }) {
    const [favoritesState, dispatch] = useReducer(FavoritesReducer, [])
    const { getPokemons, addFavoritePokemon, deleteFavoritePokemon } = useUserService();
    const { isLoggedIn } = useContext(AuthContext);

    useEffect(() => {
        if (isLoggedIn) {
            loadFavorites();
        }
        return () => {
        }
    }, [isLoggedIn])

    async function loadFavorites() {
        const response = await getPokemons();
        dispatch({ type: actionTypes.LOAD_FAVORITES, payload: response.data });
    }

    async function addFavorite(id) {
        const response = await addFavoritePokemon(id);

        dispatch({ type: actionTypes.ADD_FAVORITE, payload: response.data })
    };

    async function removeFavorite(id) {
        const response = await deleteFavoritePokemon(id);

        dispatch({ type: actionTypes.REMOVE_FAVORITE, payload: response.data })
    };

    function isFavorite(id) {
        return favoritesState.some(fav => {
            return fav._id === id
        });
    };

    function cleanState() {
        dispatch({ type: actionTypes.CLEAN_STATE })
    }

    return (
        <FavoritesContext.Provider
            value={{
                favoritesState,
                addFavorite,
                removeFavorite,
                isFavorite,
                loadFavorites,
                cleanState
            }}
        >
            {children}
        </FavoritesContext.Provider>
    );
}

