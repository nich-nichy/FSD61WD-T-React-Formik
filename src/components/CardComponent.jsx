import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Model from '../components/models/Model';
import { LibraryContext } from '../context/LibraryContext';

const CardComponent = ({ bookName, author, isbn, publication, authorName, dob, bio, id }) => {
    const { books, setBooks, authors, setAuthors, currentMode, setCurrentMode, setEditingItem } = useContext(LibraryContext);

    const bookColorArr = ['#4169e1', '#FF6F61', '#6B5B95', '#88B04B', '#F7CAC9', '#92A8D1', '#955251', '#B565A7', '#009B77', '#DD4124', '#45B8AC', '#4169e1'];
    const bookColor = bookColorArr[Math.floor(Math.random() * bookColorArr.length)];

    const handleBookEdit = () => {
        setEditingItem({ id, bookName, author, isbn, publication });
        setCurrentMode('edit-book');
    };

    const handleAuthorEdit = () => {
        setEditingItem({ id, authorName, dob, bio });
        setCurrentMode('edit-author');
    };

    const handleBookDelete = () => {
        setBooks(books.filter(book => book.id !== id));
    };

    const handleAuthorDelete = () => {
        setAuthors(authors.filter(author => author.id !== id));
    };

    return (
        <>
            {currentMode?.includes('book') ? (
                <Card className="p-3 shadow-sm col-3" style={{ width: '18rem' }}>
                    <div
                        className="rounded mb-3"
                        style={{ width: '100%', height: '180px', backgroundColor: bookColor }}
                    ></div>
                    <Card.Body>
                        <Card.Title className="text-center">{bookName}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted text-center">{author}</Card.Subtitle>
                        <Card.Text className="text-center">
                            ISBN: {isbn}
                            <br />
                            Publication Date: {publication}
                        </Card.Text>
                        <Card.Footer className="text-center">
                            <div>
                                <button className='btn btn-primary m-1' onClick={handleBookEdit}>Edit</button>
                                <button className='btn btn-danger m-1' onClick={handleBookDelete}>Delete</button>
                            </div>
                            <Model />
                        </Card.Footer>
                    </Card.Body>
                </Card>
            ) : (
                <Card className="p-3 shadow-sm col-3" style={{ width: '18rem' }}>
                    <div
                        className="rounded mb-3"
                        style={{ width: '100%', height: '180px', backgroundColor: bookColor }}
                    ></div>
                    <Card.Body>
                        <Card.Title className="text-center">{authorName}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted text-center">DOB: {dob}</Card.Subtitle>
                        <Card.Text className="text-center">
                            Bio: {bio}
                        </Card.Text>
                        <Card.Footer className="text-center">
                            <div>
                                <button className='btn btn-primary m-1' onClick={handleAuthorEdit}>Edit</button>
                                <button className='btn btn-danger m-1' onClick={handleAuthorDelete}>Delete</button>
                            </div>
                            <Model />
                        </Card.Footer>
                    </Card.Body>
                </Card>
            )}
        </>
    );
};

export default CardComponent;
