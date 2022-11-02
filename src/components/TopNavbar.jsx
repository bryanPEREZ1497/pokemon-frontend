import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthContext';

export default function TopNavbar() {
    const { logOut, isLoggedIn, username, cleanState } = useContext(AuthContext);
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand>PokeApp</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav className="">
                        <NavLink
                            className="nav-item nav-link"
                            to="/home"
                        >
                            Home
                        </NavLink>
                        {
                            isLoggedIn ?
                                <Nav className="">
                                    <NavLink
                                        className="nav-item nav-link"
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'start',
                                        }}
                                        to="/list"
                                    >
                                        Pokemons
                                    </NavLink>
                                    <NavLink
                                        className="nav-item nav-link"
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'start',
                                        }}
                                        to="/favorites"
                                    >
                                        Favorites
                                    </NavLink>
                                    <NavLink
                                        className="nav-item nav-link"
                                        to="/login"
                                        onClick={()=>{logOut();}}
                                    >
                                        Log out
                                    </NavLink>
                                    <Navbar.Text>
                                        Usuario {username}
                                    </Navbar.Text>
                                </Nav>
                                :
                                <Nav className="">
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
                                </Nav>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}