import * as React from 'react';
import { Link } from 'react-router-dom';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Chip from '@mui/material/Chip';
import InfoIcon from '@mui/icons-material/Info';
import FavoriteButton from './FavoriteButton';


export default function Character({ character }) {

    return (
        <Card
            elevation={3}
            sx={{ minWidth: '' }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="pokemon">
                        {character.name[0].toUpperCase()}
                    </Avatar>
                }

                title={character.name}
                subheader={
                    character.type.map((el, index) => {
                        return <Chip color="info" size="small" label={el} key={index} />
                    })
                }
            />
            <CardMedia
                component="img"
                height="300"
                image={character.image}
                alt={character.name}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {character.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteButton favorite={character} />
                </IconButton>
                <Link to={`/character/${character._id}`}>
                    <IconButton aria-label="info">
                        <InfoIcon color='success' />
                    </IconButton>
                </Link>
            </CardActions>
        </Card>
    );
}
