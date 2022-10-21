import { Button, Card, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import authService from '../../services/authService';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { messageService } from '../../services/messageService';

const loginSchema = yup.object({
    username: yup.string().required(),
    password: yup.string().required(),
}).required();


export default function LoginPage() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    });

    const navigate = useNavigate();

    const onSubmit = async (data) => {

        const response = await authService.login(data.username, data.password);
        // if (!response) {
        //     messageService.error('Usuario o contraseña incorrectos');
        //     return
        // }
        // messageService.success('Bienvenido');
        navigate('/list')

    };


    return (
        <Container className="mt-5">
            <Card style={{ width: '18rem' }}>
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

        </Container>
    )
}
