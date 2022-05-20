import React from "react";
import { Link } from "react-router-dom";
import {
    Navbar,
    Nav,
    Container,
    NavDropdown,
    Form,
    FormControl,
} from "react-bootstrap";
import {
    IconButton,
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


export default function BlogNavbar() {
    return (
        <div>
            <Navbar bg="light" expand="md">
                <Container>
                    <Navbar.Brand as={Link} to="/">MY BLOG+</Navbar.Brand>
                    
                    <Navbar.Toggle aria-controls="app-navbar-nav"></Navbar.Toggle>

                    <Navbar.Collapse id="app-navbar-nav">
                        <Nav className="me-auto">                            
                                <Nav.Link as={Link} to="/">HOME</Nav.Link>
                            
                            <NavDropdown title="TOPICS" id="app-navbar-dropdown">
                                <NavDropdown.Item href="#">Artificial Intelligence</NavDropdown.Item>
                                <NavDropdown.Item href="#">Web Development</NavDropdown.Item>
                                <NavDropdown.Item href="#">Data Analytics</NavDropdown.Item>
                                <NavDropdown.Item href="#">Programming</NavDropdown.Item>
                                <NavDropdown.Item href="#">Others</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
                            <Nav.Link as={Link} to="/contact">CONTACT</Nav.Link>
                        </Nav>

                        {/* Search input form */}
                        <Form className="d-flex">
                            <FormControl
                                placeholder="Search blogs"
                                type="search"
                                aria-label="Search"
                            />

                            <IconButton>
                                <SearchIcon />
                            </IconButton>

                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}