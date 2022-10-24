import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import authService from '../../services/authService';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { messageService } from '../../services/messageService';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import pikachu from '../../assets/pikachu.png'
import Image from 'react-bootstrap/Image'

const loginSchema = yup.object({
    username: yup.string().required(),
    password: yup.string().required(),
}).required();


export default function RegisterPage() {

    const { signUp } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    });

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            await signUp(data.username, data.password);
            navigate('/list');
        } catch (error) {
            console.log(error);
            messageService.error(error.response.data.message);
        }
    };


    return (
        <Container className="mt-5">
            <Row>
                <Col
                    xs={12}
                    sm={12}
                    md={4}
                    lg={4}
                    xl={4}
                >
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Register</Card.Title>
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
                >
                    <Image src={pikachu} fluid />
                </Col>
            </Row>


        </Container>
    )
}
