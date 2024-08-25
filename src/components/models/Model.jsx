import React, { useContext } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { LibraryContext } from '../../context/LibraryContext';

const Model = () => {
    const { books, setBooks, showModel, setModel, currentMode } = useContext(LibraryContext);
    const handleClose = () => {
        setModel(false);
    };
    return (
        <div>
            {currentMode?.includes('book') ? <Modal
                show={showModel}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                className="bg-dark"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        initialValues={{
                            bookName: '',
                            author: '',
                            isbn: '',
                            publishedDate: '',
                        }}

                        validationSchema={Yup.object().shape({
                            bookName: Yup.string()
                                .min(2, 'Too Short!')
                                .max(50, 'Too Long!')
                                .required('Required '),
                            author: Yup.string().min(2, 'Too Short!').required('Required'),
                            isbn: Yup.number().required('Required'),
                            publishedDate: Yup.date().required('Required'),
                        })}
                        onSubmit={async (values) => {
                            // console.log(values);

                        }}
                    >
                        {({ handleSubmit }) => (
                            <Form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="bookName" className="form-label m-1">Book Name</label>
                                    <Field id="bookName" name="bookName" placeholder="Enter book name" className="form-control" />
                                    <ErrorMessage name="author" component="div" className="text-danger p-1" />
                                    <label htmlFor="author" className="form-label m-1">Author</label>
                                    <Field id="author" name="author" placeholder="Enter author" className="form-control" />
                                    <ErrorMessage name="author" component="div" className="text-danger p-1" />
                                    <label htmlFor="isbn" className="form-label m-1">ISBN</label>
                                    <Field id="isbn" name="isbn" placeholder="Enter ISBN" className="form-control" />
                                    <ErrorMessage name="isbn" component="div" className="text-danger p-1" />
                                    <label className="form-label m-1">Published date</label>
                                    <Field name="publishedDate" type="date" className="form-control" />
                                    <ErrorMessage name="publishedDate" component="div" className="text-danger p-1" />
                                </div>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" type='submit'>
                                        Save
                                    </Button>

                                </Modal.Footer>
                            </Form>
                        )}
                    </Formik>
                </Modal.Body>
            </Modal> :
                <Modal
                    show={showModel}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    className="bg-dark"
                >
                    <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Formik
                            initialValues={{
                                authorName: '',
                                birthDate: '',
                                shortBio: '',
                            }}

                            validationSchema={Yup.object().shape({
                                authorName: Yup.string()
                                    .min(2, 'Too Short!')
                                    .max(50, 'Too Long!')
                                    .required('Required '),
                                birthDate: Yup.date().required('Required'),
                                shortBio: Yup.string().required('Required'),
                            })}
                            onSubmit={async (values) => {
                                // console.log(values);
                            }}
                        >
                            {({ handleSubmit }) => (
                                <Form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="authorName" className="form-label m-1">Author Name</label>
                                        <Field id="authorName" name="authorName" placeholder="Enter book name" className="form-control" />
                                        <ErrorMessage name="authorName" component="div" className="text-danger p-1" />
                                        <label className="form-label m-1">Birth date</label>
                                        <Field name="birthDate" type="date" className="form-control" />
                                        <ErrorMessage name="birthDate" component="div" className="text-danger p-1" />
                                        <label htmlFor="shortBio" className="form-label m-1">Short Biography</label>
                                        <Field id="shortBio" name="shortBio" placeholder="Enter short biography about the author" className="form-control" />
                                        <ErrorMessage name="shortBio" component="div" className="text-danger p-1" />
                                    </div>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button variant="primary" type='submit'>
                                            Save
                                        </Button>

                                    </Modal.Footer>
                                </Form>
                            )}
                        </Formik>
                    </Modal.Body>
                </Modal>}

        </div>
    );
};

export default Model;