import React from 'react'
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';

const Dashboard = () => {
    return (
        <>
            <div className='m-3'>
                <Navbar expand="lg bg-light" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    </Container>
                </Navbar>
                <hr />
                <div className="d-flex justify-content-between row">
                    <Card style={{ flex: 1 }} className="p-3 m-3">
                        <Card.Body className=''>
                            <div>
                                <Card.Title className=''>Current Books</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">You can add books, here is our current books</Card.Subtitle>
                                <Card.Text className="text-center fs-3">
                                    0
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{ flex: 1 }} className="p-3 m-3">
                        <Card.Body>
                            <div>
                                <Card.Title>Current Authors:</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">You can add authors, here is our current authors</Card.Subtitle>
                                <Card.Text className="text-center fs-3">
                                    0
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                </div>

            </div>
        </>
    )
}

export default Dashboard