import React, { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import { LibraryContext } from '../context/LibraryContext';

const CardComponent = () => {
    const { currentMode, setCurrentMode } = useContext(LibraryContext);
    const bookArr = ['#4169e1', '#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9', '#92A8D1', '#955251', '#B565A7', '#009B77', '#DD4124', '#45B8AC', '#4169e1']
    return (
        <>
            {currentMode?.includes('book') ?
                <Card className="p-3 shadow-sm" style={{ width: '18rem' }}>
                    <div
                        className="bg-primary rounded mb-3"
                        style={{ width: '100%', height: '180px', backgroundColor: bookArr[Math.floor(Math.random() * 11)] }}
                    ></div>
                    <Card.Body>
                        <Card.Title className="text-center">Book Name</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted text-center">Author</Card.Subtitle>
                        <Card.Text className="text-center">
                            ISBN:
                            <br />
                            Publication:
                        </Card.Text>
                        <Card.Footer className="text-center">
                            <div className="">
                                <button className='btn btn-primary m-1'>Edit</button>
                                <button className='btn btn-danger m-1'>Delete</button>
                            </div>
                        </Card.Footer>
                    </Card.Body>
                </Card> :
                <Card className="p-3 shadow-sm" style={{ width: '18rem' }}>
                    <div
                        className="bg-primary rounded mb-3"
                        style={{ width: '100%', height: '180px', backgroundColor: bookArr[Math.floor(Math.random() * 11)] }}
                    ></div>
                    <Card.Body>
                        <Card.Title className="text-center">Author Name</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted text-center">Birth date</Card.Subtitle>
                        <Card.Text className="text-center">
                            Short biography:
                        </Card.Text>
                        <Card.Footer className="text-center">
                            <div className="">
                                <button className='btn btn-primary m-1'>Edit</button>
                                <button className='btn btn-danger m-1'>Delete</button>
                            </div>
                        </Card.Footer>
                    </Card.Body>
                </Card>}
        </>
    )
}

export default CardComponent