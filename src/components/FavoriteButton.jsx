import React, { useEffect, useState, useContext, } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FavoritesContext } from '../contexts/FavoriteContext/FavoritesContext';
import { messageService } from '../services/messageService';

const iconColors = {
    isFavorite: 'error',
    isNotFavorite: 'action',
}

export default function FavoriteButton({ favorite }) {
    const { favoritesState,
        addFavorite,
        removeFavorite,
        isFavorite } = useContext(FavoritesContext)
    const [iconColor, setIconColor] = useState('')

    useEffect(() => {
        if (isFavorite(favorite._id)) {
            setIconColor(iconColors.isFavorite)
        } else {
            setIconColor(iconColors.isNotFavorite)
        }
    }, [favoritesState])

    function handleClick() {
        if (!isFavorite(favorite._id)) {
            addFavorite(favorite._id)
                .then(res => {
                    setIconColor(iconColors.isFavorite)
                })
                .catch(e => { messageService.error('No se ha podido añadir a favoritos') })
        } else {
            removeFavorite(favorite._id)
                .then(res => {
                    setIconColor(iconColors.isNotFavorite)
                })
                .catch(e => messageService.error('No se ha podido eliminar de favoritos'))
        }
    }

    return (
        <FavoriteIcon
            color={iconColor}
            onClick={handleClick} />
    )
}