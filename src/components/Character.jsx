
import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
// import '../App.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Character({ character }) {
    return (
        <Card className='fadein hover'
            style={{
                backgroundColor: '#940909',
                
            }}>
            <Card.Img
                variant="top"
                src={character.image}
                alt={character.name}
                style={{ width: '12rem', height: '12rem' }}
            />
            <Card.Body>
                <Card.Title style={{ color: 'black' }}>{character.name}</Card.Title>
                <Link to={`/character/${character._id}`}>
                    <Button variant="primary" size="sm">
                        Más
                    </Button>
                </Link>
                {/* <Typography gutterBottom variant="h7" component="div" color="white"
                            onClick={(e) => {
                                navigator.clipboard.writeText(character.name)
                            }}>
                            {character.name} <CircleIcon style={
                                {
                                    color: status[character.status],
                                    fontSize: 10
                                }
                            } />
                        </Typography> */}
                {/* <Typography variant="body2" color="white">
                            {character.species}
                        </Typography> */}
            </Card.Body>
        </Card>
    );
}

