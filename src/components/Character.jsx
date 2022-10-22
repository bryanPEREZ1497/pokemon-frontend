
import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
// import '../App.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Character({ character }) {
    return (
        <Card className='fadein hover'
            style={{
                backgroundColor: 'rgba(255, 255, 255, 0.5)',

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
            </Card.Body>
        </Card>
    );
}

