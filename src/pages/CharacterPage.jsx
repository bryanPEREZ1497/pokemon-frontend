import React, { useState, useEffect } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import '../App.css'
import pokemonService from '../services/pokemonService';
import { messageService } from '../services/messageService';
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
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
};


export default function characterPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState({});
    const [show, setShow] = useState(false);

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

    function openModal() {
        setShow(true);
    }

    function closeModal() {
        setShow(false);
    }

    if (!pokemon) {
        return <Navigate to="/list" />
    }

    return (
        <Container>
            <Row>
                <Col
                    xs={12}
                    sm={12}
                    md={6}
                    lg={4}
                    xl={4}>
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
                        <Button
                            variant="outline-primary"
                            onClick={openModal} >
                            View
                        </Button>
                    </Card>
                    <Button
                        variant="outline-primary"
                        onClick={onNavigateBack} >
                        Back
                    </Button>
                    <Modal show={show} onHide={closeModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={closeModal}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={closeModal}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
                <Col
                    xs={12}
                    sm={12}
                    md={6}
                    lg={8}
                    xl={8}>
                    <Card
                        // bg="primary"
                        text="dark"
                        style={{
                            // width: '18rem',
                            backgroundColor: 'rgba(255, 255, 255, 0.5)'
                        }}
                        className="mb-2"
                    >
                        <Card.Body>
                            {/* <Card.Title style={{ color: 'black' }}>Info</Card.Title> */}
                            <Tabs
                                defaultActiveKey="info"
                                id="uncontrolled-tab-example"
                                className="mb-3"
                            >

                                <Tab eventKey="info" title="Información">
                                    <Row className='mb-3'>
                                        <Col>
                                            Name
                                            <br />
                                            {pokemon.name}
                                        </Col>
                                        <Col>
                                            Description
                                            <br />
                                            {pokemon.description}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            Altura
                                            <br />
                                            {pokemon.height} m
                                        </Col>
                                        <Col>
                                            Peso
                                            <br />
                                            {pokemon.weight} kg
                                        </Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="stats" title="Estadísticas">
                                    <Pie data={data} />
                                </Tab>
                                {/* <Tab eventKey="contact" title="Contact" disabled>
                                    <Pie data={data} />
                                </Tab> */}
                            </Tabs>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    )
}