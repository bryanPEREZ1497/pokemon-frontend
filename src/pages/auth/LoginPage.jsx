import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import fuego from '../../assets/fuego.png'
import { messageService } from '../../services/messageService';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';

const loginSchema = yup.object({
    username: yup.string().required(),
    password: yup.string().required(),
}).required();


export default function LoginPage() {

    const { logIn } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    });

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            await logIn(data.username, data.password);
            navigate('/list');
        } catch (error) {
            messageService.error(error.response.data.message);
        }
    };


    return (
        <Container className=""
            style={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <Row>
                <Col
                    xs={12}
                    sm={12}
                    md={4}
                    lg={4}
                    xl={4}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '2rem'
                    }}
                >
                    <Card style={{
                        // width: '18rem'
                        minWidth: '18rem',
                    }}>
                        <Card.Body>
                            <Card.Title>Login</Card.Title>
                            <Form onSubmit={handleSubmit(onSubmit)}>

                                <Form.Group className="mb-3" controlId="formUsername">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Username"
                                        {...register("username")}
                                        aria-invalid={errors.username ? "true" : "false"}
                                    />
                                    {errors.username?.message &&
                                        <Form.Text className="text-muted danger">
                                            Username es requerido
                                        </Form.Text>
                                    }
                                </Form.Group>


                                <Form.Group className="mb-3" controlId="formPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        {...register("password")}
                                        aria-invalid={errors.password ? "true" : "false"}
                                    />
                                    {errors.password?.message &&
                                        <Form.Text className="text-muted">
                                            Password es requerido
                                        </Form.Text>
                                    }
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col
                    xs={12}
                    sm={12}
                    md={8}
                    lg={8}
                    xl={8}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Image src={fuego}
                        fluid
                        style={{
                            maxWidth: '12rem', height: 'auto'
                        }}
                    />
                </Col>
            </Row>


        </Container>
    )
}
