import React, { createContext, useEffect, useReducer, useState } from "react";
import FavoritesReducer, { actionTypes } from "./FavoritesReducer";

export const FavoritesContext = createContext([]);



export default function FavoritesProvider({ children }) {
    const [favoritesState, dispatch] = useReducer(FavoritesReducer, [])
    console.log("FavoritesProvider", favoritesState);

    const addFavorite = (pokemon) => {
        dispatch({ type: actionTypes.ADD_FAVORITE, payload: pokemon })
    };

    const removeFavorite = (pokemon) => {
        dispatch({ type: actionTypes.REMOVE_FAVORITE, payload: pokemon })
    };

    const isFavorite = (id) => {
        return favoritesState.some((fav) => fav.id === id);
    };

    return (
        <FavoritesContext.Provider
            value={{
                favoritesState,
                addFavorite,
                removeFavorite,
                isFavorite
            }}
        >
            {children}
        </FavoritesContext.Provider>
    );
}

