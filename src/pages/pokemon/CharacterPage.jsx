import React, { useState, useEffect } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Badge, Button } from 'react-bootstrap';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import '../../App.css'
import pokemonService from '../../services/pokemonService';
import { messageService } from '../../services/messageService';

ChartJS.register(ArcElement, Tooltip, Legend);

function generateData(pokemon) {
    pokemon = { ...pokemon }
    const stats = pokemon.stats;
    const data = {
        hp: stats.hp,
        attack: stats.attack,
        defense: stats.defense,
        specialAttack: stats["special-attack"],
        specialDefense: stats["special-defense"],
        speed: stats.speed

    }

    return {
        labels: ['HP', 'Ataque', 'Defensa', 'Ataque Especial', 'Defensa Especial', 'Velocidad'],
        datasets: [
            {
                label: 'Pokemon Stats',
                data: [
                    data.hp,
                    data.attack,
                    data.defense,
                    data.specialAttack,
                    data.specialDefense,
                    data.speed,
                ],
                backgroundColor: [
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                    'rgba(255, 206, 86)',
                    'rgba(75, 192, 192)',
                    'rgba(153, 102, 255)',
                    'rgba(255, 159, 64)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }
}

export default function CharacterPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        loadCharacter();
    }, [])

    async function loadCharacter() {
        try {
            const response = await pokemonService.getPokemon(id)
            setPokemon(response.data);
        } catch (error) {
            messageService.error('Error loading character');
        }
    }

    const onNavigateBack = () => {
        navigate(-1);
    }

    if (!pokemon) {
        return <Navigate to="/list" />
    }

    return (
        <Container
            style={{
                paddingTop: '1rem',
                paddingBottom: '1rem',
                height: '100vh',
            }}>
            <Row className=''>
                <Col
                    xs={12}
                    sm={12}
                    md={6}
                    lg={4}
                    xl={4}
                    className="mb-4">
                    <Card
                        // bg="primary"
                        text="dark"
                        style={{
                            // width: '18rem',
                            backgroundColor: 'rgba(255, 255, 255, 0.5)'

                        }}
                        className="mb-2"
                    >
                        <Card.Img
                            variant="top"
                            src={pokemon.image}
                            alt={pokemon.name}
                        />
                        <Card.Body>
                            <Card.Title style={{ color: 'black' }}>{pokemon.name}</Card.Title>
                        </Card.Body>
                    </Card>
                    <Button
                        variant="outline-primary"
                        onClick={onNavigateBack} >
                        Back
                    </Button>
                </Col>
                <Col
                    xs={12}
                    sm={12}
                    md={6}
                    lg={8}
                    xl={8}>
                    <Card
                        text="dark"
                        style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.5)'
                        }}
                        className="mb-2"
                    >
                        <Card.Body>
                            <Tabs
                                defaultActiveKey="info"
                                id="uncontrolled-tab-example"
                                className="mb-3"
                            >

                                <Tab eventKey="info" title="Información">
                                    <Row className='mb-3'>
                                        <Col>
                                            <Card.Subtitle className="mb-2 text-muted d-block">Name</Card.Subtitle>
                                            {pokemon.name}
                                        </Col>
                                        <Col>
                                            <Card.Subtitle className="mb-2 text-muted">Description</Card.Subtitle>


                                            {pokemon.description}
                                        </Col>
                                    </Row>
                                    <Row className='mb-3'>
                                        <Col>
                                            <Card.Subtitle className="mb-2 text-muted">Altura</Card.Subtitle>


                                            {pokemon.height} m
                                        </Col>
                                        <Col>
                                            <Card.Subtitle className="mb-2 text-muted">Peso</Card.Subtitle>


                                            {pokemon.weight} kg
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Card.Subtitle className="mb-2 text-muted">Evoluciona a</Card.Subtitle>
                                            {pokemon.evolution}
                                        </Col>
                                        <Col>
                                            <Card.Subtitle className="mb-2 text-muted">Tipo</Card.Subtitle>

                                            {pokemon.type?.map(el => {
                                                return (
                                                    <Badge
                                                        bg="primary"
                                                        text="white"
                                                        className="me-2"
                                                        key={el._id}
                                                    >
                                                        {el}
                                                    </Badge>
                                                )
                                            })}
                                        </Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="stats" title="Estadísticas">
                                    {
                                        pokemon.stats && <Pie data={generateData(pokemon)} />
                                    }

                                </Tab>
                            </Tabs>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    )
}