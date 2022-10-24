import { Link, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthContext';

export default function TopNavbar() {
    const { logOut, isLoggedIn, username } = useContext(AuthContext);
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand>Pokedex</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {
                            isLoggedIn ?
                                <>
                                    <NavLink
                                        className="nav-item nav-link"
                                        to="/list"
                                    >
                                        Pokemons
                                    </NavLink>
                                    <NavLink
                                        className="nav-item nav-link"
                                        to="/login"
                                        onClick={logOut}
                                    >
                                        Log out
                                    </NavLink>
                                    <span className="nav-item nav-link">
                                        {username}
                                    </span>
                                </>
                                :
                                <>
                                    <NavLink
                                        className="nav-item nav-link"
                                        to="/login"
                                    >
                                        Log in
                                    </NavLink>
                                    <NavLink
                                        className="nav-item nav-link"
                                        to="/register"
                                    >
                                        Register

                                    </NavLink>

                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}