import React, { useContext } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { LibraryContext } from '../../context/LibraryContext';

const Model = () => {
    const {
        books,
        setBooks,
        authors,
        setAuthors,
        showModel,
        setModel,
        currentMode,
        setCurrentMode,
        currentAuthorsToEdit,
        currentBookToEdit,
    } = useContext(LibraryContext);

    const handleClose = () => {
        setModel(false);
        setCurrentMode('add');
    };

    const handleSubmitBook = (values) => {
        if (currentMode === 'book-edit') {
            setBooks(books.map(book => (book.id === currentBookToEdit.id ? { ...book, ...values } : book)));
        } else {
            setBooks([...books, { ...values, id: Date.now() }]);
        }
        setCurrentMode('book');
        setModel(false);
    };

    const handleSubmitAuthor = (values) => {
        if (currentMode === 'author-edit') {
            setAuthors(authors.map(author => (author.id === currentAuthorsToEdit.id ? { ...author, ...values } : author)));
        } else {
            setAuthors([...authors, { ...values, id: Date.now() }]);
        }
        setCurrentMode('author');
        setModel(false);
    };
    return (
        <div>
            {currentMode?.includes('book') ? (
                <Modal
                    show={showModel}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    className="bg-dark poppins-regular"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>{currentMode?.includes('book-edit') ? 'Edit Book' : 'Add Book'}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Formik
                            initialValues={{
                                bookName: currentMode?.includes('book-edit') ? currentBookToEdit.bookName : '',
                                author: currentMode?.includes('book-edit') ? currentBookToEdit.author : '',
                                isbn: currentMode?.includes('book-edit') ? currentBookToEdit.isbn : '',
                                publication: currentMode?.includes('book-edit') ? currentBookToEdit.publication : '',
                            }}
                            validationSchema={Yup.object().shape({
                                bookName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
                                author: Yup.string().min(2, 'Too Short!').required('Required'),
                                isbn: Yup.string()
                                    .length(13, 'ISBN must be exactly 13 digits!')
                                    .matches(/^\d+$/, 'ISBN must contain only numbers')
                                    .required('Required'),
                                publication: Yup.date().required('Required'),
                            })}
                            onSubmit={handleSubmitBook}
                        >
                            {({ handleSubmit }) => (
                                <Form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="bookName" className="form-label m-1">Book Name</label>
                                        <Field id="bookName" name="bookName" placeholder="Enter book name" className="form-control" />
                                        <ErrorMessage name="bookName" component="div" className="text-danger p-1" />

                                        <label htmlFor="author" className="form-label m-1">Author</label>
                                        <Field id="author" name="author" placeholder="Enter author" className="form-control" />
                                        <ErrorMessage name="author" component="div" className="text-danger p-1" />

                                        <label htmlFor="isbn" className="form-label m-1">ISBN</label>
                                        <Field id="isbn" name="isbn" placeholder="Enter ISBN" className="form-control" />
                                        <ErrorMessage name="isbn" component="div" className="text-danger p-1" />

                                        <label className="form-label m-1">Publication Date</label>
                                        <Field name="publication" type="date" className="form-control" />
                                        <ErrorMessage name="publication" component="div" className="text-danger p-1" />
                                    </div>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button variant="primary" type="submit">
                                            {currentMode?.includes('edit') ? 'Edit' : 'Save'}
                                        </Button>
                                    </Modal.Footer>
                                </Form>
                            )}
                        </Formik>
                    </Modal.Body>
                </Modal>
            ) : (
                <Modal
                    show={showModel}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    className="bg-dark"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>{currentMode?.includes('author-edit') ? 'Edit Author' : 'Add Author'}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Formik
                            initialValues={{
                                authorName: currentMode?.includes('author-edit') ? currentAuthorsToEdit.authorName : '',
                                dob: currentMode?.includes('author-edit') ? currentAuthorsToEdit.dob : '',
                                bio: currentMode?.includes('author-edit') ? currentAuthorsToEdit.bio : '',
                            }}
                            validationSchema={Yup.object().shape({
                                authorName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
                                dob: Yup.date().required('Required'),
                                bio: Yup.string().min(10, 'Biography should be somewhat long!').required('Required'),
                            })}
                            onSubmit={handleSubmitAuthor}
                        >
                            {({ handleSubmit }) => (
                                <Form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="authorName" className="form-label m-1">Author Name</label>
                                        <Field id="authorName" name="authorName" placeholder="Enter author name" className="form-control" />
                                        <ErrorMessage name="authorName" component="div" className="text-danger p-1" />

                                        <label htmlFor="dob" className="form-label m-1">Birth Date</label>
                                        <Field name="dob" type="date" className="form-control" />
                                        <ErrorMessage name="dob" component="div" className="text-danger p-1" />

                                        <label htmlFor="bio" className="form-label m-1">Short Biography</label>
                                        <Field id="bio" name="bio" placeholder="Enter short biography about the author" className="form-control" />
                                        <ErrorMessage name="bio" component="div" className="text-danger p-1" />
                                    </div>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button variant="primary" type="submit">
                                            {currentMode?.includes('edit') ? 'Edit' : 'Save'}
                                        </Button>
                                    </Modal.Footer>
                                </Form>
                            )}
                        </Formik>
                    </Modal.Body>
                </Modal>
            )}
        </div>
    );
};

export default Model;