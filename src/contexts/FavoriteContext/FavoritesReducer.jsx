
export const actionTypes = {
    ADD_FAVORITE: 'ADD_FAVORITE',
    REMOVE_FAVORITE: 'REMOVE_FAVORITE',
    LOAD_FAVORITES: 'LOAD_FAVORITES',
    CLEAN_STATE: 'CLEAN_STATE'
    
}

export default function FavoritesReducer(state, action) {
    switch (action.type) {
        case actionTypes.ADD_FAVORITE:
            return [(action.payload)]
        case actionTypes.REMOVE_FAVORITE:
            return [...state.filter((fav) => fav._id !== action.payload._id)]
            // return [...state, state.filter((fav) => fav.id !== action.payload.id)]
        case actionTypes.LOAD_FAVORITES:
            return [...action.payload]
        case actionTypes.CLEAN_STATE:
            return []
        default:
            break;
    }
}