import * as React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Chip from '@mui/material/Chip';
import InfoIcon from '@mui/icons-material/Info';

export default function Character({ character }) {

    return (
        <Card
            elevation={3}
            sx={{minWidth:''}}>
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
                {/* <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton> */}
                <Link to={`/character/${character._id}`}>
                    <IconButton aria-label="info">
                        <InfoIcon />
                    </IconButton>
                </Link>
            </CardActions>
        </Card>
    );
}
