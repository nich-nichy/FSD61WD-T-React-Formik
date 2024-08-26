import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LibraryContext } from '../context/LibraryContext';

const Dashboard = () => {
    const { books, authors } = useContext(LibraryContext);
    let currentBooks = books?.length || 0;
    let currentAuthors = authors?.length || 0;
    return (
        <>
            <div className='m-3'>
                <Navbar expand="lg bg-light" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="#home" className='fw-1 fs-2'>Dashboard</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    </Container>
                </Navbar>
                <hr />
                <div className="d-flex justify-content-between row">
                    <Card style={{ flex: 1 }} className="p-3 m-3">
                        <Card.Body className=''>
                            <div>
                                <Card.Title className=''>Current Books</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">You can add books here, is our current books</Card.Subtitle>
                                <Card.Text className="text-center fs-3">
                                    {currentBooks}
                                </Card.Text>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card style={{ flex: 1 }} className="p-3 m-3">
                        <Card.Body>
                            <div>
                                <Card.Title>Current Authors</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">You can add authors here, is our current authors</Card.Subtitle>
                                <Card.Text className="text-center fs-3">
                                    {currentAuthors}
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