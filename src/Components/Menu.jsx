import { APP_NAME, CONTACT_EMAIL } from '../User/UserDetails';
import { Container, Nav, Navbar } from "react-bootstrap";
import React from 'react';

const Menu = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">{APP_NAME}</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href={`mailto:${CONTACT_EMAIL}`}>Email</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Menu;